import { SemigroupAll } from "fp-ts/lib/boolean";
import { getSemigroup } from "fp-ts/lib/function";
import type { Semigroup } from "./Semigroup";
import type { Point } from "./semigroupPoint";

/**
 * 결합된 boolean Semigroup 인스턴스 입니다.
 */
export const semigroupPredicate: Semigroup<(p: Point) => boolean> =
  getSemigroup(SemigroupAll)<Point>();
