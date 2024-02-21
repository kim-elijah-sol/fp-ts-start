import { eqPoint } from "./eqPoint";

describe("eqPoint", () => {
  it("eqPoint 인스턴스로 Point 비교하기", () => {
    expect(eqPoint.equals({ x: 1, y: 1 }, { x: 1, y: 1 })).toBeTruthy();
    expect(eqPoint.equals({ x: 1, y: 1 }, { x: 1, y: 2 })).toBeFalsy();
  });
});
