import { semigroupMax, semigroupMin } from "./ordToSemigroup";

describe("ordToSemigroup", () => {
  it("semigroupMin 함수로 숫자 비교하기", () => {
    expect(semigroupMin.concat(1, 2)).toBe(1);
    expect(semigroupMin.concat(3, 2)).toBe(2);
  });

  it("semigroupMin 함수로 숫자 비교하기 : (x + y) + z = x + (y + z) 만족", () => {
    const x = 1;
    const y = 2;
    const z = 3;

    expect(semigroupMin.concat(semigroupMin.concat(x, y), z)).toBe(1);
    expect(semigroupMin.concat(x, semigroupMin.concat(y, z))).toBe(1);
  });

  it("semigroupMax 함수로 숫자 비교하기", () => {
    expect(semigroupMax.concat(1, 2)).toBe(2);
    expect(semigroupMax.concat(3, 2)).toBe(3);
  });

  it("semigroupMax 함수로 숫자 비교하기 : (x + y) + z = x + (y + z) 만족", () => {
    const x = 1;
    const y = 2;
    const z = 3;

    expect(semigroupMax.concat(semigroupMax.concat(x, y), z)).toBe(3);
    expect(semigroupMax.concat(x, semigroupMax.concat(y, z))).toBe(3);
  });
});
