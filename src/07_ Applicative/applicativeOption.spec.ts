import { isNone, isSome, none, some } from "fp-ts/lib/Option";
import { applicativeOption } from "./applicativeOption";

describe("applicativeOption", () => {
  it("applicativeOption.map 테스트 A = number, B = number", () => {
    const fa = some(3);
    const f = (a: number) => a ** 2;
    const result = applicativeOption.map(fa, f);
    expect(result).toEqual(some(9));
    expect(isSome(result)).toBe(true);
  });

  it("applicativeOption.map 테스트 A = number, B = number, none 처리", () => {
    const fa = none;
    const f = (a: number) => a ** 2;
    const result = applicativeOption.map(fa, f);
    expect(result).toBe(none);
    expect(isNone(result)).toBe(true);
  });

  it("applicativeOption.map 테스트 A = number, B = string", () => {
    const fa = some(65);
    const f = (a: number) => String.fromCharCode(a);
    const result = applicativeOption.map(fa, f);
    expect(result).toEqual(some("A"));
    expect(isSome(result)).toBe(true);
  });

  it("applicativeOption.of 테스트 A = number", () => {
    expect(applicativeOption.of(3)).toEqual(some(3));
  });

  it("applicativeOption.of 테스트 A = string", () => {
    expect(applicativeOption.of("a")).toEqual(some("a"));
  });

  it("applicativeOption.ap 테스트 fab: number => number, fa: number", () => {
    const fab = some((a: number) => a ** 2);
    const fa = some(4);
    const result = applicativeOption.ap(fab, fa);
    expect(result).toEqual(some(16));
    expect(isSome(result)).toBe(true);
  });

  it("applicativeOption.ap 테스트 fab: number => number, fa: none", () => {
    const fab = some((a: number) => a ** 2);
    const fa = none;
    const result = applicativeOption.ap(fab, fa);
    expect(result).toBe(none);
    expect(isNone(result)).toBe(true);
  });

  it("applicativeOption.ap 테스트 fab: none, fa: number", () => {
    const fab = none;
    const fa = some(4);
    const result = applicativeOption.ap(fab, fa);
    expect(result).toBe(none);
    expect(isNone(result)).toBe(true);
  });

  it("applicativeOption.ap 테스트 fab: number => string, fa: number", () => {
    const fab = some((a: number) => String.fromCharCode(a));
    const fa = some(65);
    const result = applicativeOption.ap(fab, fa);
    expect(result).toEqual(some("A"));
    expect(isSome(result)).toBe(true);
  });
});
