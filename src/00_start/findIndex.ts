import { Option, none, some } from "fp-ts/Option";

export function findIndex<A>(
  as: Array<A>,
  predicate: (a: A) => boolean
): Option<number> {
  /**
   * Array.prototype.findIndex는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다.
   */
  const index = as.findIndex(predicate);

  /**
   * 찾은 인덱스가 -1이면 none을 반환하고, 아니면 some을 반환합니다.
   */
  return index === -1 ? none : some(index);
}
