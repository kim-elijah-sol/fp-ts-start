import { getApplySemigroup } from "fp-ts/lib/Apply";
import { Apply } from "fp-ts/lib/Option";
import { semigroupSum } from "./semigroupSum";

/**
 * `getApplySemigroup` 및 `Apply` 를 이용하여 Semigroup 인스턴스를 생성합니다.
 *
 * 이 인스턴스는 `Option<number>` 두 개를 병합할 수 있습니다.
 *
 * 두 `Option<number>` 가 모두 `Some<number>` 인 경우에만 semigroupSum 을 이용하여 병합합니다.
 *
 * 아닌 경우 `None` 을 반환합니다.
 */
export const appliedSemigroup = getApplySemigroup(Apply)(semigroupSum);
