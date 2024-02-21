export interface Eq<A> {
  /**
   * `x` 와 `y` 가 같은 경우 `true` 를 반환한다.
   *
   * `fp-ts` 에서 타입 클래스는 TypeScript 의 `interface` 로 정의됩니다.
   */
  equals: (x: A, y: A) => boolean;
}
