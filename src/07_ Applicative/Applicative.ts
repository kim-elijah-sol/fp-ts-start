import type { HKT } from "fp-ts/lib/HKT";
import type { Apply } from "./Apply";

export interface Applicative<F> extends Apply<F> {
  of: <A>(a: A) => HKT<F, A>;
}
