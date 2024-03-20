import { getApplicativeValidation } from "fp-ts/lib/Either";
import { getSemigroup } from "fp-ts/lib/NonEmptyArray";

/**
 * 기존 `Either` 의 경우 먼저 실패하는 경우만 catch 할 수 있기 때문에,
 * 사용자에게 좋지 않은 UX 를 제공할 수 있습니다.
 *
 * 모든 오류를 catch 하기 위해서는 `Validation` 추상화가 도움이 됩니다.
 *
 * `Validation` 은 `Either` 와 마찬가지로 `E` 타입으로 실패하거나 `A` 타입으로 성공할 수 있는 계산을 나타냅니다.
 *
 * 다만 `Either` 와 달리 여러 오류를 수집할 수 있습니다.
 *
 * 이를 위해서 `Validation`에 `E` 타입의 두 값을 결합하는 방법을 전달해야하고,
 *
 * 동일한 두 타입을 결합하는 것은 `Semigroup` 의 전부입니다.
 */
export const applicativeValidation = getApplicativeValidation(
  getSemigroup<string>()
);
