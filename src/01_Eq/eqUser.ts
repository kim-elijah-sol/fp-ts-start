import { contramap } from "fp-ts/lib/Eq";
import { eqNumber } from "./eqNumber";

type User = {
  userId: number;
  name: string;
};

/**
 * contramap 콤비네이터는
 * `A`에 대한 `Eq`의 인스턴스와 `B`에서 `A`로의 함수가 주어지면 `B`에 대한 `Eq`의 인스턴스를 파생시킬 수 있습니다.
 */
// import { Eq } from './eq';
//
// type Contramap = <A, B>(f: (b: B) => A) => (fa: Eq<A>) => Eq<B>

/**
 * 여기서 `A` 는 `number` 이고 `B` 는 `User` 입니다.
 *
 * `User` 의 `userId` -> `number` 로의 함수가 주어지면
 * `User` 에 대한 `Eq` 인스턴스를 파생시킬 수 있습니다.
 *
 * 즉, userId 를 기준으로 User 를 비교할 수 있게 됩니다.
 */
export const eqUser = contramap((user: User) => user.userId)(eqNumber);
