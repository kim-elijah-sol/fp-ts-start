import { getMonoid } from "fp-ts/lib/Option";
import { first } from "fp-ts/lib/Semigroup";

/**
 * 가장 왼쪽에 있는 값을 반환하는 Monoid
 *
 * 만약 None 이라면 오른쪽 값을 반환
 */
export const firstMonoid = getMonoid<number>(first());
