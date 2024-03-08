import { Monoid } from "./Monoid";

export const monoidAny: Monoid<boolean> = {
  empty: false,
  concat: (x, y) => x || y,
};
