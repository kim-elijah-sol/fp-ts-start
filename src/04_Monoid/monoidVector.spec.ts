import { monoidVector } from "./monoidVector";

describe("monoidVector", () => {
  it("monoidVector 의 empty 는 { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } } 이다.", () => {
    expect(monoidVector.empty).toEqual({
      from: { x: 0, y: 0 },
      to: { x: 0, y: 0 },
    });
  });

  it("monoidVector 인스턴스로 Vector 합하기: 오른쪽, 왼쪽 항등식 만족", () => {
    const v1 = { from: { x: 1, y: 2 }, to: { x: 3, y: 4 } };

    expect(monoidVector.concat(v1, monoidVector.empty)).toEqual(v1);
    expect(monoidVector.concat(monoidVector.empty, v1)).toEqual(v1);
  });
});
