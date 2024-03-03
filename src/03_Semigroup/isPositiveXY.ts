import type { Point } from "./semigroupPoint";
import { semigroupPredicate } from "./semigroupPredicate";

const isPositiveX = ({ x }: Point) => x > 0;
const isPositiveY = ({ y }: Point) => y > 0;

/**
 * 두 predicate 함수를 병합하여 반환합니다.
 */
export const isPositiveXY = semigroupPredicate.concat(isPositiveX, isPositiveY);
