import { monoidProduct } from "./monoidProduct";

describe("monoidProduct", () => {
  it("monoidProduct 의 empty 는 1 이다.", () => {
    expect(monoidProduct.empty).toBe(1);
  });

  it("monoidProduct 인스턴스로 숫자 곱하기: 오른쪽, 왼쪽 항등식 만족", () => {
    const x = 2;

    expect(monoidProduct.concat(x, monoidProduct.empty)).toBe(x);
    expect(monoidProduct.concat(monoidProduct.empty, x)).toBe(x);
  });
});
