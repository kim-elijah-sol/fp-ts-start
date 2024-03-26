import { Dependencies } from "./Dependencies";
import { f, g, h } from "./readerDependenciesExample";

describe("readerDependenciesExample", () => {
  const deps: Dependencies = {
    i18n: {
      true: "true",
      false: "false",
    },
  };

  it("f 함수 테스트", () => {
    expect(f(true)(deps)).toBe("true");
    expect(f(false)(deps)).toBe("false");
  });

  it("g 함수 테스트", () => {
    expect(g(1)(deps)).toBe("false");
    expect(g(2)(deps)).toBe("false");
    expect(g(3)(deps)).toBe("true");
  });

  it("h 함수 테스트", () => {
    expect(h("a")(deps)).toBe("false");
    expect(h("ab")(deps)).toBe("true");
    expect(h("abc")(deps)).toBe("true");
  });
});
