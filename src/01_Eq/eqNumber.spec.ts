import { eqNumber } from "./eqNumber";

describe("eqNumber", () => {
  it("eqNumber 인스턴스로 숫자 비교하기", () => {
    expect(eqNumber.equals(1, 1)).toBeTruthy();
    expect(eqNumber.equals(1, 2)).toBeFalsy();
  });
});
