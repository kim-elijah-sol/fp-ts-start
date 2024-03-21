import { chain } from "fp-ts/lib/IO";
import { IO } from "./IO";
import { log } from "./log";
import { randomBool } from "./randomBool";

/**
 * `map` 대신 `chain` 을 사용할 수도 있습니다.
 *
 * `chain` 은 `flatMap` 입니다.
 *
 * `chain: <A, B>(f: (a: IO<A>) => IO<B>): (fa: IO<A>) => IO<B>`
 */
export const program: IO<void> = chain(log)(randomBool);
