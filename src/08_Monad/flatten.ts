import { Option, isNone, none } from "fp-ts/lib/Option";

/**
 * flatten 으로 2중으로 중첩된 Option Type 의 데이터를 평평하게 만들기
 */
export const flatten = <A>(mma: Option<Option<A>>): Option<A> =>
  isNone(mma) ? none : mma.value;
