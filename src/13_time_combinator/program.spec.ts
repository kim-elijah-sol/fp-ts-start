import { program } from "./program";

describe("program", () => {
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

  it("program 테스트 : random 이 최소값을 반환하는 경우", () => {
    global.Math.random = jest.fn().mockReturnValue(0);
    expect(program()).toBe(1346269);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`값: 1346269, 시간: 10`);
  });

  it("program 테스트 : random 이 최대값을 반환하는 경우", () => {
    global.Math.random = jest.fn().mockReturnValue(0.99);
    expect(program()).toBe(14930352);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`값: 14930352, 시간: 10`);
  });
});
