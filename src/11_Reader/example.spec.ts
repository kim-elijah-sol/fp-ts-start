import { f, g, h } from "./example";

describe("example", () => {
  it("f 함수 테스트", () => {
    expect(f(true)).toBe("true");
    expect(f(false)).toBe("false");
  });

  it("g 함수 테스트", () => {
    expect(g(1)).toBe("false");
    expect(g(2)).toBe("false");
    expect(g(3)).toBe("true");
  });

  it("h 함수 테스트", () => {
    expect(h("a")).toBe("false");
    expect(h("ab")).toBe("true");
    expect(h("abc")).toBe("true");
  });
});
