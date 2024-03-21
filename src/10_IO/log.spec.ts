import { log } from "./log";

describe("log", () => {
  const spy = jest.spyOn(console, "log").mockImplementation();

  beforeEach(() => {
    spy.mockClear();
  });

  it("log 테스트", () => {
    log("log Test")();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("log Test");
  });
});
