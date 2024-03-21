import { random } from "./random";

describe("random", () => {
  it("random 테스트", () => {
    global.Math.random = jest.fn().mockReturnValue(0.5);
    expect(random()).toBe(0.5);
  });
});
