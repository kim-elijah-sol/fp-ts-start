import { Ord } from "./Ord";

/**
 * `Ord` 인스턴스를 받아 `x` 와 `y` 중 작은 값을 반환하는 함수를 반환하는 함수 min 입니다.
 */
export const min =
  <A>(O: Ord<A>): ((x: A, y: A) => A) =>
  (x, y) =>
    O.compare(x, y) === -1 ? x : y;
