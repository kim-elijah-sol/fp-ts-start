/**
 * - f: A -> B
 * - g: B -> C
 * - h: A -> C
 */
export const compose =
  <A, B, C>(g: (b: B) => C, f: (a: A) => B): ((a: A) => C) =>
  (a) =>
    g(f(a));
