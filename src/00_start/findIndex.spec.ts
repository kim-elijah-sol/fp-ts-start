import { getEq, isNone, isSome, none, some } from "fp-ts/lib/Option";
import * as N from "fp-ts/number";
import { findIndex } from "./findIndex";

describe("findIndex", () => {
  const array: number[] = [1, 2, 3, 5];

  const E = getEq(N.Eq);

  it("findIndex함수가 찾고자 하는 값을 찾은 경우", () => {
    const result = findIndex(array, (a) => a === 1);
    expect(isSome(result)).toBeTruthy();
    expect(E.equals(result, some(0))).toBeTruthy();
  });

  it("findIndex함수가 찾고자 하는 값을 찾지 못한 경우", () => {
    const result = findIndex(array, (a) => a === 4);
    expect(isNone(result)).toBeTruthy();
    expect(E.equals(result, none)).toBeTruthy();
  });
});
