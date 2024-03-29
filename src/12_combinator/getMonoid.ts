import { chain, type IO } from "fp-ts/lib/IO";
import { concatAll, type Monoid } from "fp-ts/lib/Monoid";
import { replicate } from "fp-ts/lib/ReadonlyArray";
import { pipe } from "fp-ts/lib/function";

/**
 * `A` 에 대한 `Monoid` 인스턴스가 주어졌을 때 `IO<A>` 에 대한 `Monoid` 인스턴스를 파생시킬 수 있습니다.
 */
export const getMonoid = <A>(M: Monoid<A>): Monoid<IO<A>> => ({
  concat: (x, y) => () => M.concat(x(), y()),
  empty: () => M.empty,
});

export const monoidVoid: Monoid<void> = {
  concat: () => undefined,
  empty: undefined,
};

export const replicateIO = (n: number, io: IO<void>): IO<void> =>
  concatAll(getMonoid(monoidVoid))(replicate(n, io));

export const log =
  (message: unknown): IO<void> =>
  () =>
    console.log(message);

export const randomInt =
  (min: number, max: number): IO<number> =>
  () =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export const fib = (n: number): number =>
  n <= 1 ? 1 : fib(n - 1) + fib(n - 2);

export const printFib = pipe(
  randomInt(30, 35),
  chain((n) => log(fib(n)))
);

export const loopPrintFib = (n: number) => replicateIO(n, printFib);
