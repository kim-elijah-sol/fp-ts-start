import { now } from "fp-ts/lib/Date";
import type { IO } from "fp-ts/lib/IO";
import { Monad } from "fp-ts/lib/IO";
import { log } from "./getMonoid";

/**
 * IO<A> 를 받아서 실행 시간을 측정하는 함수입니다.
 */
export function time<A>(ma: IO<A>): IO<A> {
  return Monad.chain(now, (start) =>
    Monad.chain(ma, (a) =>
      Monad.chain(now, (end) =>
        Monad.map(log(`Elapsed: ${end - start}`), () => a)
      )
    )
  );
}
