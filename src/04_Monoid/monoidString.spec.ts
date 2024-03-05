import { monoidString } from "./monoidString";

describe("monoidString", () => {
  it(`monoidString 의 empty 는 "" 이다.`, () => {
    expect(monoidString.empty).toBe("");
  });

  it("monoidString 인스턴스로 문자열 더하기: 오른쪽, 왼쪽 항등식 만족", () => {
    const x = "hello";

    expect(monoidString.concat(x, monoidString.empty)).toBe(x);
    expect(monoidString.concat(monoidString.empty, x)).toBe(x);
  });
});
