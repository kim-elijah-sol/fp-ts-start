import { getLastSemigroup } from "./getLastSemigroup";

describe("getLastSemigroup", () => {
  it("getLastSemigroup 인스턴스로 두 번째 인자만 반환하기", () => {
    expect(getLastSemigroup<number>().concat(1, 2)).toBe(2);
    expect(getLastSemigroup<string>().concat("x", "y")).toBe("y");
  });

  it("getLastSemigroup 인스턴스로 두 번째 인자만 반환하기 : (x * y) * z = x * (y * z) 만족", () => {
    const x = 1;
    const y = 2;
    const z = 3;

    expect(
      getLastSemigroup<number>().concat(
        getLastSemigroup<number>().concat(x, y),
        z
      )
    ).toBe(
      getLastSemigroup<number>().concat(
        x,
        getLastSemigroup<number>().concat(y, z)
      )
    );
  });
});
