import { monoidAny } from "./monoidAny";

describe("monoidAny", () => {
  it("monoidAny 의 empty 는 false 이다.", () => {
    expect(monoidAny.empty).toBe(false);
  });

  it("monoidAny 인스턴스로 논리합하기: 오른쪽, 왼쪽 항등식 만족", () => {
    const x = false;

    expect(monoidAny.concat(x, monoidAny.empty)).toBe(x);
    expect(monoidAny.concat(monoidAny.empty, x)).toBe(x);

    const x2 = true;

    expect(monoidAny.concat(x2, monoidAny.empty)).toBe(x2);
    expect(monoidAny.concat(monoidAny.empty, x2)).toBe(x2);
  });
});
