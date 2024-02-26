import { Ord } from "./Ord";

/**
 * ordNumber 인스턴스는 Ord 타입 클래스의 인스턴스로, 숫자를 정렬할 때 사용합니다.
 *
 * 인스턴스는 아래 3가지 규칙을 만족합니다.
 * - `반사성 ( Reflexivity )` : 모든 `x` 에 대해 `compare(x, x) === 0` 를 만족합니다.
 * - `대칭성 ( Antisymmetry )` : 모든 `x`, `y` 에 대해 `compare(x, y) === compare(y, x)` 를 만족합니다.
 * - `이동성 ( Transitivity )` : 모든 `x`, `y`, `z` 에 대해 `compare(x, y) === 0` 이고 `compare(y, z) === 0` 이면 `compare(x, z) === 0` 을 만족합니다.
 */
export const ordNumber: Ord<number> = {
  equals: (x, y) => x === y,
  compare: (x, y) => (x < y ? -1 : x > y ? 1 : 0),
};
