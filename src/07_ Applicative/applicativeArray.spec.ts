import { applicativeArray } from "./applicativeArray";

describe("applicativeArray", () => {
  it("applicativeArray.map 테스트 A = number, B = number", () => {
    const fa = [1, 2, 3];
    const f = (a: number) => a ** 2;
    const result = applicativeArray.map(fa, f);
    expect(result).toEqual([1, 4, 9]);
  });

  it("applicativeArray.map 테스트 A = number, B = string", () => {
    const fa = [65, 66, 67];
    const f = (a: number) => String.fromCharCode(a);
    const result = applicativeArray.map(fa, f);
    expect(result).toEqual(["A", "B", "C"]);
  });

  it("applicativeArray.of 테스트", () => {
    const a = 1;
    const result = applicativeArray.of(a);
    expect(result).toEqual([1]);
  });

  it("applicativeArray.ap 테스트 A = number, B = number", () => {
    const fab = [(a: number) => a ** 2, (a: number) => a ** 3];
    const fa = [1, 2, 3];
    const result = applicativeArray.ap(fab, fa);
    expect(result).toEqual([1, 4, 9, 1, 8, 27]);
  });

  it("applicativeArray.ap 테스트 A = number, B = string", () => {
    const fab = [
      (a: number) => String.fromCharCode(a),
      (a: number) => a.toString(),
    ];
    const fa = [65, 66, 67];
    const result = applicativeArray.ap(fab, fa);
    expect(result).toEqual(["A", "B", "C", "65", "66", "67"]);
  });
});
