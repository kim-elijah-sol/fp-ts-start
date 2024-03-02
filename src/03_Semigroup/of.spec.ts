import { getArraySemigroup } from "./getArraySemigroup";
import { of } from "./of";

describe("of", () => {
  it("string 타입의 of 함수", () => {
    expect(getArraySemigroup<string>().concat(of("x"), of("y"))).toEqual([
      "x",
      "y",
    ]);
  });

  it("number 타입의 of 함수", () => {
    expect(getArraySemigroup<number>().concat(of(1), of(2))).toEqual([1, 2]);
  });
});
