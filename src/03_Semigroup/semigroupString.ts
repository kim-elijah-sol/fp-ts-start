import { Semigroup } from "./Semigroup";

/**
 * `(string, +)` 식의 Semigroup 입니다.
 */
export const semigroupString: Semigroup<string> = {
  concat: (x, y) => x + y,
};
