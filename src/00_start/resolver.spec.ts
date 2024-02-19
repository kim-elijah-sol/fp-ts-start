import { resolver } from "./resolver";

describe("resolver", () => {
  it("resolver 함수로 문자열을 정상적으로 resolve 한 경우", async () => {
    const result = await resolver("hello world")();

    expect(result).toBe("hello world!!");
    await expect(resolver("test 입니다")()).resolves.toBe("test 입니다!!");
  });
});
