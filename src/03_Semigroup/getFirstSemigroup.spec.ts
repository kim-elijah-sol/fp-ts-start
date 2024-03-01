import { getFirstSemigroup } from "./getFirstSemigroup";

describe("getFirstSemigroup", () => {
  it("getFirstSemigroup 인스턴스로 첫 번째 인자만 반환하기", () => {
    expect(getFirstSemigroup<number>().concat(1, 2)).toBe(1);
    expect(getFirstSemigroup<string>().concat("x", "y")).toBe("x");
  });

  it("getFirstSemigroup 인스턴스로 첫 번째 인자만 반환하기 : (x * y) * z = x * (y * z) 만족", () => {
    const x = 1;
    const y = 2;
    const z = 3;

    expect(
      getFirstSemigroup<number>().concat(
        getFirstSemigroup<number>().concat(x, y),
        z
      )
    ).toBe(x);
    expect(
      getFirstSemigroup<number>().concat(
        x,
        getFirstSemigroup<number>().concat(y, z)
      )
    ).toBe(x);
  });
});
