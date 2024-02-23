import { eqArrayOfPoints } from "./eqArrayOfPoints";

describe("eqArrayOfPoints", () => {
  it("eqArrayOfPoints 로 Point 배열 비교하기", () => {
    const a = [
      { x: 1, y: 2 },
      { x: 3, y: 4 },
    ];
    const b = [
      { x: 1, y: 2 },
      { x: 3, y: 4 },
    ];
    const c = [
      { x: 3, y: 4 },
      { x: 1, y: 2 },
    ];
    expect(eqArrayOfPoints.equals(a, b)).toBeTruthy();
    expect(eqArrayOfPoints.equals(a, c)).toBeFalsy();
  });
});
