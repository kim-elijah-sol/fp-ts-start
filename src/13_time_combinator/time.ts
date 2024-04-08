import { now } from "fp-ts/lib/Date";
import type { IO } from "fp-ts/lib/IO";
import { Monad } from "fp-ts/lib/IO";

/**
 * 12_combinator/time.ts 와 달리 실행 시간을 측정한 후 결과를 반환합니다.
 */
export function time<A>(ma: IO<A>): IO<[A, number]> {
  return Monad.chain(now, (start) =>
    Monad.chain(ma, (a) => Monad.map(now, (end) => [a, end - start]))
  );
}
