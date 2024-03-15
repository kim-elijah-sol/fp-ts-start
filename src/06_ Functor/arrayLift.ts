/**
 * `B = F<C>` 에서의 `F` 가 `Array` 인 `Functor` 를 위한 `lift` 함수입니다.
 *
 * - `f: (a: A) => F<B>` 는 이펙트가 있는 프로그램입니다.
 * - `g: (b: B) => C` 는 순수한 프로그램입니다.
 *
 * `f` 를 `g` 로 조합하기 위해 함수 `(b: B) => C` 에서 함수 `(fb: F<B>) => F<C>` 로 `g` 를 들어올려
 * 일반적인 함수 조합을 사용할 수 있습니다.
 *
 */
export const arrayLift =
  <B, C>(g: (b: B) => C): ((fb: Array<B>) => Array<C>) =>
  (fb) =>
    fb.map(g);
