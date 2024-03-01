import { Semigroup } from "./Semigroup";

/**
 * `A` 의 자유 Semigroup 이라고 하는 `Array<A>` (*) 에 대한 `Semigroup` 인스턴스를 반환합니다.
 */
export function getArraySemigroup<A = never>(): Semigroup<Array<A>> {
  return {
    concat: (x, y) => x.concat(y),
  };
}
