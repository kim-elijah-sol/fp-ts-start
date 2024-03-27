import { Eq, fromEquals } from "fp-ts/lib/Eq";

export const getEq = <A>(E: Eq<A>): Eq<ReadonlyArray<A>> =>
  fromEquals(
    (xs, ys) =>
      xs.length === ys.length && xs.every((x, i) => E.equals(x, ys[i]))
  );

export const eqNumber: Eq<number> = {
  equals: (x, y) => x === y,
};

export const eqNumbers: Eq<ReadonlyArray<number>> = getEq(eqNumber);

export const eqNumbersArray: Eq<ReadonlyArray<ReadonlyArray<number>>> =
  getEq(eqNumbers);
