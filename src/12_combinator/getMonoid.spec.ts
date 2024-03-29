import { loopPrintFib } from "./getMonoid";

describe("getMonoid", () => {
  const spy = jest.spyOn(console, "log").mockImplementation();

  beforeEach(() => {
    spy.mockClear();
  });

  it("loopPrintFib 테스트", () => {
    loopPrintFib(5)();
    expect(console.log).toHaveBeenCalledTimes(5);
  });
});
