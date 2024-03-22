import { chain, map } from "fp-ts/lib/IO";
import { IO } from "./IO";
import { log } from "./log";

export const withLogging = <A>(action: IO<A>): IO<A> =>
  chain<A, A>((a) => map(() => a)(log(`값 : ${a}`)))(action);
