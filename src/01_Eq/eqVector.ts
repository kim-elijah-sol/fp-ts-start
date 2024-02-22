import { struct } from "fp-ts/lib/Eq";
import { Point, eqPoint } from "./eqPoint";

export type Vector = {
  from: Point;
  to: Point;
};

/**
 * 두 벡터의 시작점과 끝점이 같은지 비교합니다.
 *
 * eqPoint 인스턴스를 활용하여 새로운 Eq<Vector> 인스턴스를 만듭니다.
 */
export const eqVector = struct({
  from: eqPoint,
  to: eqPoint,
});
