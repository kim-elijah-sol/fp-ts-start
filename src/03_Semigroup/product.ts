import { concatAll } from "fp-ts/lib/Semigroup";
import { semigroupProduct } from "./semigroupProduct";

/**
 * `concatAll` 에 `semigroupProduct` 인스턴스를 넘겨주어 (number, *) 연산을 여러 요소에서 수행할 수 있습니다.
 */
export const product = concatAll(semigroupProduct);
