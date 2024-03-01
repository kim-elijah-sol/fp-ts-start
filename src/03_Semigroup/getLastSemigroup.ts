import { Semigroup } from "./Semigroup";

export function getLastSemigroup<A = never>(): Semigroup<A> {
  return {
    concat: (_, y) => y,
  };
}
