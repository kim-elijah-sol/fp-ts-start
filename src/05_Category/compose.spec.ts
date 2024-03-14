import { compose } from "./compose";

describe("compose", () => {
  it("f: string => number, g: number => boolean, h = g ∘ f = string => boolean", () => {
    const f = (s: string) => s.length;
    const g = (n: number) => n > 2;
    const h = compose(g, f);

    expect(h("yup")).toBeTruthy();
    expect(h("yu")).toBeFalsy();
    expect(h("y")).toBeFalsy();
    expect(h("")).toBeFalsy();
  });

  it("f: number => string, g: string => string, h = g ∘ f = number => string", () => {
    const f = (n: number) => n.toString();
    const g = (s: string) => s.repeat(Number(s));
    const h = compose(g, f);

    expect(h(3)).toBe("333");
    expect(h(2)).toBe("22");
    expect(h(0)).toBe("");
  });
});
