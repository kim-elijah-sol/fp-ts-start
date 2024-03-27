import * as N from "fp-ts/number";
import * as S from "fp-ts/string";
import { eqNumber, eqNumbers, eqNumbersArray, getEq } from "./getEq";

describe("getEq", () => {
  it("getEq 테스트: number", () => {
    const numberEq = getEq(N.Eq);

    expect(numberEq.equals([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(numberEq.equals([1, 2, 4], [1, 2, 3])).toBe(false);
    expect(numberEq.equals([1, 2], [1, 2, 3])).toBe(false);
  });

  it("getEq 테스트: number", () => {
    const stringEq = getEq(S.Eq);

    expect(stringEq.equals(["a", "b", "c"], ["a", "b", "c"])).toBe(true);
    expect(stringEq.equals(["a", "b", "d"], ["a", "b", "c"])).toBe(false);
    expect(stringEq.equals(["a", "b"], ["a", "b", "c"])).toBe(false);
  });

  it("eqNumber 테스트", () => {
    expect(eqNumber.equals(1, 1)).toBe(true);
    expect(eqNumber.equals(1, 2)).toBe(false);
  });

  it("eqNumbers 테스트", () => {
    expect(eqNumbers.equals([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(eqNumbers.equals([1, 2, 4], [1, 2, 3])).toBe(false);
    expect(eqNumbers.equals([1, 2], [1, 2, 3])).toBe(false);
  });

  it("eqNumbersArray 테스트", () => {
    expect(
      eqNumbersArray.equals(
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
        [
          [1, 2, 3],
          [4, 5, 6],
        ]
      )
    ).toBe(true);
    expect(
      eqNumbersArray.equals(
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
        [
          [1, 2, 3],
          [4, 5, 7],
        ]
      )
    ).toBe(false);
    expect(
      eqNumbersArray.equals(
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
        [
          [1, 2, 3],
          [4, 5],
        ]
      )
    ).toBe(false);
  });
});
