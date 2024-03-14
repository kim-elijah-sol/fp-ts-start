import { f, g, h } from "./hfg";

describe("hfg", () => {
  it("f 함수로 문자열의 길이를 구하기", () => {
    expect(f("yup")).toBe(3);
    expect(f("yu")).toBe(2);
    expect(f("y")).toBe(1);
    expect(f("")).toBe(0);
  });

  it("g 함수로 숫자가 2보다 큰지 확인하기", () => {
    expect(g(3)).toBeTruthy();
    expect(g(2)).toBeFalsy();
    expect(g(1)).toBeFalsy();
    expect(g(0)).toBeFalsy();
  });

  it("h 함수로 문자열을 받아서 길이를 구하고, 그 길이가 2보다 큰지 확인하기", () => {
    expect(h("yup")).toBeTruthy();
    expect(h("yu")).toBeFalsy();
    expect(h("y")).toBeFalsy();
    expect(h("")).toBeFalsy();
  });
});
