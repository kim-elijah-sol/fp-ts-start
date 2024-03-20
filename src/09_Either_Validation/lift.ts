import { Either, mapLeft } from "fp-ts/Either";
import type { NonEmptyArray } from "fp-ts/lib/NonEmptyArray";
import { pipe } from "fp-ts/lib/function";

/**
 * `applicativeValidation` 를 사용하기 위해서는
 * `Either<NonEmptyArray<string>, string>` 타입의 값을 반환할 수 있도록 모든 규칙을 재정의 해야합니다.
 *
 * 번거롭게 `Either<E, A>` 규칙을 재정의하는 것을
 * `Either<NonEmptyArray<string>, string>`를 반환할 수 있도록 콤비네이터를 정의할 수 있습니다.
 */
export const lift =
  <E, A>(
    check: (a: A) => Either<E, A>
  ): ((a: A) => Either<NonEmptyArray<E>, A>) =>
  (a) =>
    pipe(
      check(a),
      mapLeft((a) => [a])
    );
