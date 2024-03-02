/**
 * A 의 요소를 `Array<A>` 의 단일 요소로 변환합니다.
 */
export function of<A>(a: A): Array<A> {
  return [a];
}
