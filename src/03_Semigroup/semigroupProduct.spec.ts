import { semigroupProduct } from "./semigroupProduct";

describe("semigroupProduct", () => {
  it("semigroupProduct 인스턴스로 숫자 곱하기", () => {
    expect(semigroupProduct.concat(1, 2)).toBe(2);
    expect(semigroupProduct.concat(2, 3)).toBe(6);
    expect(semigroupProduct.concat(3, 4)).toBe(12);
  });

  it("semigroupProduct 인스턴스로 숫자 곱하기 : (x * y) * z = x * (y * z) 만족", () => {
    const x = 2;
    const y = 3;
    const z = 4;
    expect(semigroupProduct.concat(semigroupProduct.concat(x, y), z)).toBe(24);
    expect(semigroupProduct.concat(x, semigroupProduct.concat(y, z))).toBe(24);
  });
});
