import { Eq } from "./eq";

/**
 * eqNumber 인스턴스는 Eq 타입 클래스의 인스턴스로, 숫자를 비교할 때 사용합니다.
 *
 * 인스터는스는 아래 3가지 규칙을 만족합니다.
 * - `반사성 ( Reflexivity )` : 모든 `x` 에 대해 `equals(x, x) === true` 를 만족합니다.
 * - `대칭성 ( Symmetry )` : 모든 `x`, `y` 에 대해 `equals(x, y) === equals(y, x)` 를 만족합니다.
 * - `이동성 ( Transitivity )` : 모든 `x`, `y`, `z` 에 대해 `equals(x, y) === true` 이고 `equals(y, z) === true` 이면 `equals(x, z) === true` 를 만족합니다.
 */
export const eqNumber: Eq<number> = {
  equals: (x, y) => x === y,
};
