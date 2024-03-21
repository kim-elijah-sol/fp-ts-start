import { randomBool } from "./randomBool";

describe("randomBool", () => {
  it("randomBool 테스트: false", () => {
    global.Math.random = jest.fn().mockReturnValue(0.5);
    const result = randomBool();
    expect(result).toBe(false);
  });

  it("randomBool 테스트: true", () => {
    global.Math.random = jest.fn().mockReturnValue(0.6);
    const result = randomBool();
    expect(result).toBe(true);
  });
});
