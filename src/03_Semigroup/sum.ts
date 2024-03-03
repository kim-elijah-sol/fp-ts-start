import { concatAll } from "fp-ts/lib/Semigroup";
import { semigroupSum } from "./semigroupSum";

/**
 * 기존 `.concat` 은 `A` 의 두 요소에서만 동작하지만,
 * `concatAll` 을 사용하여 더 많은 요소를 연결할 수 있습니다.
 */
export const sum = concatAll(semigroupSum);
