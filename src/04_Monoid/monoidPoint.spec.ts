import { monoidPoint } from "./monoidPoint";

describe("monoidPoint", () => {
  it("monoidPoint 의 empty 는 { x: 0, y: 0 } 이다.", () => {
    expect(monoidPoint.empty).toEqual({ x: 0, y: 0 });
  });

  it("monoidPoint 인스턴스로 Point 합하기: 오른쪽, 왼쪽 항등식 만족", () => {
    const p1 = { x: 1, y: 2 };

    expect(monoidPoint.concat(p1, monoidPoint.empty)).toEqual(p1);
    expect(monoidPoint.concat(monoidPoint.empty, p1)).toEqual(p1);
  });
});
