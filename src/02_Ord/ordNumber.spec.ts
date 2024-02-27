import { _ordNumber, ordNumber } from "./ordNumber";

describe("ordNumber", () => {
  it("ordNumber 로 숫자 비교하기", () => {
    expect(ordNumber.compare(1, 2)).toBe(-1);
    expect(ordNumber.compare(2, 1)).toBe(1);
    expect(ordNumber.compare(1, 1)).toBe(0);
  });

  it("fromCompare 헬퍼 함수로 정의된 ordNumber 인스턴스로 숫자 비교하기", () => {
    expect(_ordNumber.compare(1, 2)).toBe(-1);
    expect(_ordNumber.compare(2, 1)).toBe(1);
    expect(_ordNumber.compare(1, 1)).toBe(0);
  });
});
