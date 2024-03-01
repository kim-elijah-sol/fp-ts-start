import { Semigroup } from "./Semigroup";

export function getFirstSemigroup<A = never>(): Semigroup<A> {
  return {
    concat: (x, _) => x,
  };
}
