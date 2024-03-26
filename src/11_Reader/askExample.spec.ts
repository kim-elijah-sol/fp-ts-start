import { Dependencies2 } from "./Dependencies";
import { g, h } from "./askExample";

describe("askExample", () => {
  const deps: Dependencies2 = {
    i18n: {
      true: "true",
      false: "false",
    },
    lowerBound: 2,
  };

  it("g 함수 테스트", () => {
    expect(g(1)(deps)).toBe("false");
    expect(g(2)(deps)).toBe("false");
    expect(g(3)(deps)).toBe("true");
    expect(g(3)({ ...deps, lowerBound: 3 })).toBe("false");
  });

  it("h 함수 테스트", () => {
    expect(h("a")(deps)).toBe("false");
    expect(h("ab")(deps)).toBe("true");
    expect(h("abc")(deps)).toBe("true");
    expect(h("abc")({ ...deps, lowerBound: 4 })).toBe("false");
  });
});
