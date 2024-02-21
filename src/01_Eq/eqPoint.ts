import { struct } from "fp-ts/lib/Eq";
import { Eq } from "./eq";
import { eqNumber } from "./eqNumber";

export type Point = {
  x: number;
  y: number;
};

// const eqPoint: Eq<Point> = {
//   /**
//    * p1 과 p2 의 x,y 좌표가 같은지 비교합니다.
//    */
//   equals: (p1, p2) => p1.x === p2.x && p1.y === p2.y,
//   /**
//    * 데이터의 주소 값이 같은지 먼저 비교할 수도 있습니다. ( 참조 동등성 비교 )
//    */
//   equals: (p1, p2) => p1 === p2 || (p1.x === p2.x && p1.y === p2.y),
// };

export const eqPoint: Eq<Point> = struct({
  x: eqNumber,
  y: eqNumber,
});
