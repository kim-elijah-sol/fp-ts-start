import { chain, rightIO } from "fp-ts/lib/IOEither";
import { randomInt } from "fp-ts/lib/Random";
import { readFileSync } from "./readFileSync";

/**
 * `randomInt` 는 `IO<number>` 을 반환하기에 `IOEither` 의 `chain` 으로 사용할 수 없습니다.
 *
 * 이 때 `lifting 함수 (rightIO)`를 사용하여 `chain` 에 사용 가능하도록 끌어 올릴 수 있습니다.
 *
 * 시작 값 | lifting 함수
 * --- | ---
 * `IO<A>` | `rightIO: <E, A>(ma: IO<A>) => IOEither<E, A>`
 * `A` | `right: <E, A>(a: A) => IOEither<E, A>`
 * `IO<E>` | `leftIO: <E, A>(ml: IO<E>) => IOEither<E, A>`
 * `E` | `left: <E, A>(e: E) => IOEither<E, A>`
 * `Either<E, A>` | `fromEither: <E, A>(ma: Either<E, A>) => IOEither<E, A>`
 */
export const randomFile = chain((n) => readFileSync(`${n}.txt`))(
  rightIO(randomInt(1, 3))
);
