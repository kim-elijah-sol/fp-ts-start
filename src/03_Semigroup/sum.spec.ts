import { sum } from "./sum";

describe("sum", () => {
  it("sum 함수로 여러 숫자 합치기", () => {
    expect(sum(0)([1, 2, 3, 4])).toBe(10);
    expect(sum(5)([1, 2, 3, 4])).toBe(15);
  });
});
