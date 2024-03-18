import { head } from "fp-ts/lib/Array";
import { Functor, Option, flatten } from "fp-ts/lib/Option";
import { inverse } from "./inverse";

/**
 * flatten 을 사용하여 Option 데이터를 평평하게 하여 첫 번째 요소의 역수를 구할 수 있는 함수입니다.
 */
export const inverseHead = (array: Array<number>): Option<number> =>
  flatten(Functor.map(head(array), inverse));
