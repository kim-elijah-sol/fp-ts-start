import { sequenceT } from "fp-ts/lib/Apply";
import { Either, map } from "fp-ts/lib/Either";
import type { NonEmptyArray } from "fp-ts/lib/NonEmptyArray";
import { pipe } from "fp-ts/lib/function";
import { applicativeValidation } from "./applicativeValidation";
import { hasCapital, hasNumber, minLength } from "./chainPasswordValidation";
import { lift } from "./lift";

export const minLengthV = lift(minLength);
export const hasCapitalV = lift(hasCapital);
export const hasNumberV = lift(hasNumber);

/**
 * 모든 규칙을 합쳐서 n 개의 작업을 왼쪽에서 오른쪽으로 수행하여
 * 결과 튜플을 반환하는 `sequenceT` 헬퍼 함수를 사용합니다.
 */
export const passwordValidation = (
  s: string
): Either<NonEmptyArray<string>, string> =>
  pipe(
    sequenceT(applicativeValidation)(
      minLengthV(s),
      hasCapitalV(s),
      hasNumberV(s)
    ),
    map(() => s)
  );
