import { Option, isNone, none, some } from "fp-ts/lib/Option";

/**
 * `B = F<C>` 에서의 `F` 가 `Option` 인 `Functor` 를 위한 `lift` 함수입니다.
 */
export const optionLift =
  <B, C>(g: (b: B) => C): ((fb: Option<B>) => Option<C>) =>
  (fb) =>
    isNone(fb) ? none : some(g(fb.value));
