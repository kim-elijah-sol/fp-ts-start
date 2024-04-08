import { time } from "./time";

describe("time", () => {
  const baseTime = new Date().getTime();
  beforeEach(() => {
    let callCount = 0;
    jest.spyOn(Date.prototype, "getTime").mockImplementation(() => {
      callCount++;
      return baseTime + callCount * 10;
    });
  });

  it("time 테스트 : A 가 number 인 경우", () => {
    expect(time(() => 1)()).toEqual([1, 10]);
  });

  it("time 테스트 : A 가 string 인 경우", () => {
    expect(time(() => "a")()).toEqual(["a", 10]);
  });
});
