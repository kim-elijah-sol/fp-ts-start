import { ignoreSnd } from "./ignoreSnd";

describe("ignoreSnd", () => {
  it("ignoreSnd 테스트 : A 가 number 인 경우", () => {
    expect(ignoreSnd(() => [1, "string"])()).toBe(1);
  });

  it("ignoreSnd 테스트 : A 가 string 인 경우", () => {
    expect(ignoreSnd(() => ["string", 1])()).toBe("string");
  });

  it("ignoreSnd 테스트 : A 가 object 인 경우", () => {
    const obj = { a: 1, b: "string" };
    expect(ignoreSnd(() => [obj, 1])()).toBe(obj);
  });
});
