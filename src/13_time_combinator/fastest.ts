import { getApplySemigroup } from "fp-ts/lib/Apply";
import { Apply, IO } from "fp-ts/lib/IO";
import { contramap } from "fp-ts/lib/Ord";
import { concatAll, min } from "fp-ts/lib/Semigroup";
import { Ord } from "fp-ts/lib/number";
import { ignoreSnd } from "./ignoreSnd";
import { time } from "./time";

/**
 * 가장 빠른 IO 를 선택하는 combinator
 */
export function fastest<A>(head: IO<A>, tail: Array<IO<A>>): IO<A> {
  const ordTuple = contramap(([_, elapsed]: [A, number]) => elapsed)(Ord);
  const semigroupTuple = min(ordTuple);
  const semigroupIO = getApplySemigroup(Apply)(semigroupTuple);
  const fastest = concatAll(semigroupIO)(time(head))(tail.map(time));
  return ignoreSnd(fastest);
}
