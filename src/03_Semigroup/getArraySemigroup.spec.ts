import { getArraySemigroup } from "./getArraySemigroup";

describe("getArraySemigroup", () => {
  it("getArraySemigroup 인스턴스로 배열을 연결하기", () => {
    expect(getArraySemigroup<number>().concat([1], [2])).toEqual([1, 2]);
    expect(getArraySemigroup<string>().concat(["x"], ["y"])).toEqual([
      "x",
      "y",
    ]);
  });

  it("getArraySemigroup 인스턴스로 배열을 연결하기 : (x * y) * z = x * (y * z) 만족", () => {
    const x = [1];
    const y = [2];
    const z = [3];

    expect(
      getArraySemigroup<number>().concat(
        getArraySemigroup<number>().concat(x, y),
        z
      )
    ).toEqual([1, 2, 3]);

    expect(
      getArraySemigroup<number>().concat(
        x,
        getArraySemigroup<number>().concat(y, z)
      )
    ).toEqual([1, 2, 3]);
  });
});
