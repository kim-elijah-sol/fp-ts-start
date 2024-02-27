import { Ord } from "./Ord";

/**
 * `Ord` 인스턴스를 받아 `x` 와 `y` 중 작은 값을 반환하는 함수를 반환하는 함수 min 입니다.
 */
export const min =
  <A>(O: Ord<A>): ((x: A, y: A) => A) =>
  (x, y) =>
    /**
     * `x` 와 `y` 가 같은 경우 첫 번째 인자인 x 를 반환할 수 있도록 y 가 큰 경우에만 y 를 반환합니다.
     */
    O.compare(x, y) === 1 ? y : x;
