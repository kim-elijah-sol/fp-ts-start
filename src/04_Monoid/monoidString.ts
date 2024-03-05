import { semigroupString } from "../03_Semigroup/semigroupString";
import { Monoid } from "./Monoid";

/**
 * `string` 타입의 덧셈 연산에 대한 `Monoid` 인스턴스이다.
 *
 * `string` 타입의 데이터를 더할 때 `""`이 `중립원(Identity)`이 된다.
 */
export const monoidString: Monoid<string> = {
  ...semigroupString,
  empty: "",
};
