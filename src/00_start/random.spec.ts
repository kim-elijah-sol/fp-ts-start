import { random } from "./random";

describe("random", () => {
  it("Math.random 함수를 Mocking 하여 random 함수 테스트하기", () => {
    /**
     * Math.random 함수는 0.5를 반환하도록 Mocking 합니다.
     */
    Math.random = jest.fn().mockReturnValue(0.5);
    const result = random();
    expect(result()).toBe(0.5);
  });
});
