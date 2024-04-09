import { log } from "fp-ts/lib/Console";
import { IO, Monad } from "fp-ts/lib/IO";
import { time } from "./time";

export function withLogging<A>(ma: IO<A>): IO<A> {
  return Monad.chain(time(ma), ([a, millis]) =>
    Monad.map(log(`값: ${a}, 시간: ${millis}`), () => a)
  );
}
