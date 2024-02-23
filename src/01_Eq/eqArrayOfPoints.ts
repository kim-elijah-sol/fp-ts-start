import { getEq } from "fp-ts/lib/Array";
import { Eq } from "./eq";
import { Point, eqPoint } from "./eqPoint";

/**
 * 배열에서의 Eq 를 위한 콤비네이터인 getEq 를 사용하여 Eq<Array<Point>> 를 생성합니다.
 */
export const eqArrayOfPoints: Eq<Array<Point>> = getEq(eqPoint);
