import { Eq } from "../01_Eq/eq";

type Ordering = -1 | 0 | 1;

export interface Ord<A> extends Eq<A> {
  /**
   * 순서를 앞으로 배치하기 위해서는 -1 을 반환하고
   * 순서를 뒤로 배치하기 위해서는 1 을 반환합니다.
   * 같은 순서라면 0 을 반환합니다.
   */
  compare: (x: A, y: A) => Ordering;
}
