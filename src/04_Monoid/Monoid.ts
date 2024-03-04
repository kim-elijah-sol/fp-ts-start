import { Semigroup } from "../03_Semigroup/Semigroup";

/**
 * `Monoid` 는 `Semigroup` 의 `concat` 과 관련하여 중립인 값을 갖는 특별한 `Semigroup` 이다.
 * 
 * `Monoid` 는 아래 두 규칙을 만족해야 한다.
 * - `오른쪽 항등식(Right identity)`: `A`의 모든 `x`에 대하여 `concat(x, empty) = x`를 만족한다.
 * - `왼쪽 항등식(Left identity)`: `A`의 모든 `x`에 대하여 `concat(empty, x) = x`를 만족한다.
 */
export interface Monoid<A> extends Semigroup<A> {
    empty: A;
}