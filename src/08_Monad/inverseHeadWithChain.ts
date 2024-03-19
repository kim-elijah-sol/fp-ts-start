import { head } from "fp-ts/lib/Array";
import { Option, chain } from "fp-ts/lib/Option";
import { inverse } from "./inverse";

export const inverseHeadWithChain = (array: Array<number>): Option<number> =>
  chain(inverse)(head(array));
