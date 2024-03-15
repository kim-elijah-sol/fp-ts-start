import { Task } from "fp-ts/lib/Task";

/**
 * `B = F<C>` 에서의 `F` 가 `Task` 인 `Functor` 를 위한 `lift` 함수입니다.
 */
export const taskLift =
  <B, C>(g: (b: B) => C): ((fb: Task<B>) => Task<C>) =>
  (fb) =>
  () =>
    fb().then(g);
