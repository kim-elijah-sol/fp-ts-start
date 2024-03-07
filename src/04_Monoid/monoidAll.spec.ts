import { monoidAll } from "./monoidAll";

describe("monoidAll", () => {
  it("monoidAll 의 empty 는 true 이다.", () => {
    expect(monoidAll.empty).toBe(true);
  });

  it("monoidAll 인스턴스로 논리곱하기: 오른쪽, 왼쪽 항등식 만족", () => {
    const x = true;

    expect(monoidAll.concat(x, monoidAll.empty)).toBe(x);
    expect(monoidAll.concat(monoidAll.empty, x)).toBe(x);
  });
});
