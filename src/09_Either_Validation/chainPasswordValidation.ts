import { Either, chain, left, right } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";

/**
 * `Either` 는 `E` 타입으로 실패하거나 `A` 타입으로 성공할 수 있는 계산을 나타냅니다.
 */
export const minLength = (s: string): Either<string, string> =>
  s.length >= 6 ? right(s) : left("비밀번호는 최소 6자리에요.");

export const hasCapital = (s: string): Either<string, string> =>
  /[A-Z]/g.test(s) ? right(s) : left("대문자를 포함해주세요.");

export const hasNumber = (s: string): Either<string, string> =>
  /[0-9]/g.test(s) ? right(s) : left("숫자를 포함해주세요.");

/**
 * 위 `Either` 를 `pipe` 와 `chain` 을 사용하여 묶을 수 있습니다.
 */
export const chainPasswordValidation = (s: string): Either<string, string> =>
  pipe(minLength(s), chain(hasCapital), chain(hasNumber));
