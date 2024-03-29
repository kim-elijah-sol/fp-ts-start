import { Option, none, some } from "fp-ts/lib/Option";

export const inverse = (n: number): Option<number> =>
  n === 0 ? none : some(1 / n);
