import { contramap } from "fp-ts/lib/Ord";
import { Ord } from "./Ord";
import { ordNumber } from "./ordNumber";

type User = {
  name: string;
  age: number;
};

/**
 * byAge 는 `User` 타입에 대한 `Ord` 인스턴스입니다.
 *
 * User 의 `age` 필드를 기준으로 정렬합니다.
 */
// export const _byAge: Ord<User> = fromCompare((x, y) =>
//   ordNumber.compare(x.age, y.age)
// );

/**
 * `contramap` 콤비네이터를 활용하여 `number` 에 대한 `Ord` 인스턴스와 `number` -> `User` 로의 함수를 조합하여
 * `User` 에 대한 `Ord` 인스턴스를 파생시킬 수 있습니다.
 *
 * 또한 반복되는 구문 또한 피할 수 있습니다.
 */
export const byAge: Ord<User> = contramap((user: User) => user.age)(ordNumber);
