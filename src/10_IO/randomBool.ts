import { map } from "fp-ts/lib/IO";
import { IO } from "./IO";
import { random } from "./random";

export const randomBool: IO<boolean> = map((n: number) => n > 0.5)(random);
