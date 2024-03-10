import { struct } from "fp-ts/lib/Monoid";
import { Monoid } from "./Monoid";
import { Point, monoidPoint } from "./monoidPoint";

type Vector = {
  from: Point;
  to: Point;
};

export const monoidVector: Monoid<Vector> = struct({
  from: monoidPoint,
  to: monoidPoint,
});
