import { getEq, isSome, some } from "fp-ts/lib/Option";
import * as N from "fp-ts/number";
import { find } from "./find";

describe("find", () => {
  const array: number[] = [1, 2, 3, 5];

  const E = getEq(N.Eq);

  it("find함수가 찾고자 하는 값을 찾은 경우", () => {
    const result = find(array, (a) => a === 1);
    expect(isSome(result)).toBeTruthy();
    expect(E.equals(result, some(1))).toBeTruthy();
  });

  it("find함수가 찾고자 하는 값을 찾지 못한 경우", () => {
    const result = find(array, (a) => a === 4);
    expect(isSome(result)).toBeFalsy();
    expect(E.equals(result, some(4))).toBeFalsy();
  });
});
