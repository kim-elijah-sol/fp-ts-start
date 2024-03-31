import { time } from "./time";

describe("time", () => {
  const spy = jest.spyOn(console, "log").mockImplementation();
  const baseTime = new Date().getTime();
  beforeEach(() => {
    let callCount = 0;
    jest.spyOn(Date.prototype, "getTime").mockImplementation(() => {
      callCount++;
      return baseTime + callCount * 10;
    });
    spy.mockClear();
  });

  it("time 테스트", () => {
    expect(time(() => 1)()).toBe(1);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("Elapsed: 10");
  });

  it("time 테스트", () => {
    expect(time(() => "string")()).toBe("string");
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("Elapsed: 10");
  });
});
