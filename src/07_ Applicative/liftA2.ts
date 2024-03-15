import type { Apply1 } from "fp-ts/lib/Apply";
import type { Kind, URIS } from "fp-ts/lib/HKT";

type Curried2<B, C, D> = (b: B) => (c: C) => D;

/**
 * g: (b: F<B>) => (c: F<C>) => F<D>
 */
export const liftA2 =
  <F extends URIS>(
    F: Apply1<F>
  ): (<B, C, D>(
    g: Curried2<B, C, D>
  ) => Curried2<Kind<F, B>, Kind<F, C>, Kind<F, D>>) =>
  (g) =>
  (fb) =>
  (fc) =>
    F.ap(F.map(fb, g), fc);
