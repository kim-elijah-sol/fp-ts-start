import { Task } from "fp-ts/lib/Task";

/**
 * Task 는 실패하지 않는 비동기 작업을 할 때 사용합니다.
 */
export function resolver(a: string): Task<string> {
  return () => Promise.resolve(a + "!!");
}
