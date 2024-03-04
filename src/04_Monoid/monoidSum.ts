import { semigroupSum } from "../03_Semigroup/semigroupSum";
import { Monoid } from "./Monoid";

/**
 * `number` 타입의 덧셈 연산에 대한 `Monoid` 인스턴스이다.
 * 
 * `number` 타입의 데이터를 더할 때 `0`이 `중립원(Identity)`이 된다.
 */
export const monoidSum: Monoid<number> = {
    ...semigroupSum,
    empty: 0,
};