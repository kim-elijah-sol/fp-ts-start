import { map } from "fp-ts/lib/IO";
import { randomInt } from "fp-ts/lib/Random";
import { withLogging } from "./withLogging";

function fib(n: number): number {
  return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
}

/**
 * withLogging combinator 를 사용하여 fib 함수를 실행하는 프로그램
 */
export const program = withLogging(map(fib)(randomInt(30, 35)));
