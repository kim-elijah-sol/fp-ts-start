import { Option, fromNullable } from "fp-ts/lib/Option";

export function find<A>(as: Array<A>, predicate: (a: A) => boolean): Option<A> {
  /** 아래와 같다.
   * const result = as.find(predicate);
   *
   * return result === undefined ? none : some(result);
   */
  return fromNullable(as.find(predicate));
}
