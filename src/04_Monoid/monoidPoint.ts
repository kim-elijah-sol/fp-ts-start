import { struct } from "fp-ts/lib/Monoid";
import { Monoid } from "./Monoid";
import { monoidSum } from "./monoidSum";

export type Point = {
  x: number;
  y: number;
};

// export const monoidPoint: Monoid<Point> = {
//   ...semigroupPoint,
//   empty: { x: 0, y: 0 },
// };

/**
 * monoid 의 struct 함수를 이용하여 Point 의 x, y 좌표를 각각 Monoid 인스턴스인 monoidSum 을 이용하여 합칩니다.
 */
export const monoidPoint: Monoid<Point> = struct({
  x: monoidSum,
  y: monoidSum,
});
