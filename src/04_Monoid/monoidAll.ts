import { Monoid } from "./Monoid";

/**
 * `boolean` 타입의 논리곱 연산에 대한 `Monoid` 인스턴스이다.
 *
 * `boolean` 타입의 데이터를 논리곱할 때 `true`가 `중립원(Identity)`이 된다.
 */
export const monoidAll: Monoid<boolean> = {
  concat: (x, y) => x && y,
  empty: true,
};
