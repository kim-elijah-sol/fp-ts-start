import { getApplicativeMonoid } from "fp-ts/lib/Applicative";
import { Applicative } from "fp-ts/lib/IO";
import { concatAll } from "fp-ts/lib/Monoid";
import { Monoid } from "../04_Monoid/Monoid";
import { monoidSum } from "../04_Monoid/monoidSum";
import { IO } from "./IO";

type Die = IO<number>;

const monoidDie: Monoid<Die> = getApplicativeMonoid(Applicative)(monoidSum);

export const roll: (dice: Array<Die>) => IO<number> = concatAll(monoidDie);
