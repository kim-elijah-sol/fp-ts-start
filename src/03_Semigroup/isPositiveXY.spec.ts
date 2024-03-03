import { isPositiveXY } from "./isPositiveXY";

describe("isPositiveXY", () => {
  it("isPositiveXY 함수로 Point 확인하기", () => {
    expect(isPositiveXY({ x: 1, y: 2 })).toBeTruthy();
    expect(isPositiveXY({ x: 1, y: -2 })).toBeFalsy();
    expect(isPositiveXY({ x: 0, y: 2 })).toBeFalsy();
    expect(isPositiveXY({ x: 0, y: 0 })).toBeFalsy();
  });
});
