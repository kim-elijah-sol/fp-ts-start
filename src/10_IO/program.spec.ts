import { program } from "./program";

describe("program", () => {
  const spy = jest.spyOn(console, "log").mockImplementation();

  beforeEach(() => {
    spy.mockClear();
  });

  it("program 테스트: false", () => {
    global.Math.random = jest.fn().mockReturnValue(0.5);
    program();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(false);
  });

  it("program 테스트: true", () => {
    global.Math.random = jest.fn().mockReturnValue(0.6);
    program();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(true);
  });
});
