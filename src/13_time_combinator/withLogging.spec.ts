import { of } from "fp-ts/lib/IO";
import { withLogging } from "./withLogging";

describe("withLogging", () => {
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

  it("withLogging 테스트 : A 가 number 인 경우", () => {
    expect(withLogging(of(1))()).toBe(1);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("값: 1, 시간: 10");
  });

  it("withLogging 테스트 : A 가 string 인 경우", () => {
    expect(withLogging(of("string"))()).toBe("string");
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("값: string, 시간: 10");
  });
});
