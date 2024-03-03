import { struct } from "fp-ts/lib/Semigroup";
import { Semigroup } from "./Semigroup";
import { semigroupSum } from "./semigroupSum";

export type Point = {
  x: number;
  y: number;
};

/**
 * Point 에 대한 Semigroup 인스턴스
 *
 * Point 의 x, y 좌표를 각각 Semigroup 인스턴스인 semigroupSum 을 이용하여 합칩니다.
 */
// export const semigroupPoint: Semigroup<Point> = {
//     concat: (p1, p2) => ({
//         x: semigroupSum.concat(p1.x, p2.x),
//         y: semigroupSum.concat(p1.y, p2.y),
//     }),
// };

/**
 * semigroupPoint 를 Eq의 struct 와 같이 Semigroup 의 struct 함수를 이용하여 구현할 수 있습니다.
 */
export const semigroupPoint: Semigroup<Point> = struct({
  x: semigroupSum,
  y: semigroupSum,
});
