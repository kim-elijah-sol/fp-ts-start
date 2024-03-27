import { Eq, fromEquals } from "fp-ts/lib/Eq";
import { pipe } from "fp-ts/lib/function";
import * as N from "fp-ts/number";
import * as RA from "fp-ts/ReadonlyArray";

/**
 * `A` 에 대한 `Eq` 인스턴스와 `B -> A` 함수가 주어지면 `B` 에 대한 `Eq` 인스턴스를 파생시킬 수 있다.
 */
export const contramp =
  <A, B>(f: (b: B) => A) =>
  (E: Eq<A>): Eq<B> =>
    fromEquals((x, y) => E.equals(f(x), f(y)));

interface User {
  id: number;
  name: string;
}

export const eqUser: Eq<User> = pipe(
  N.Eq,
  contramp((user: User) => user.id)
);

export const eqUsers: Eq<Array<User>> = RA.getEq(eqUser);
