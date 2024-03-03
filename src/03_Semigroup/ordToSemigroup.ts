import { max, min } from "fp-ts/lib/Semigroup";
import { Ord } from "fp-ts/lib/number";
import { Semigroup } from "./Semigroup";

/**
 * A 에 대한 Ord 인스턴스가 존재하면 이를 Semigroup 으로 변환할 수 있습니다.
 */
export const semigroupMin: Semigroup<number> = min(Ord);

export const semigroupMax: Semigroup<number> = max(Ord);
