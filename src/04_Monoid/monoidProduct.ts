import { semigroupProduct } from "../03_Semigroup/semigroupProduct";
import { Monoid } from "./Monoid";

/**
 * `number` 타입의 곱셈 연산에 대한 `Monoid` 인스턴스이다.
 *
 * `number` 타입의 데이터를 곱할 때 `1`이 `중립원(Identity)`이 된다.
 */
export const monoidProduct: Monoid<number> = {
  ...semigroupProduct,
  empty: 1,
};
