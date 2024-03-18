import { none, some } from "fp-ts/lib/Option";
import { inverseHead } from "./inverseHead";

describe("inverseHead", () => {
  it("inverseHead 테스트", () => {
    expect(inverseHead([1, 2, 3])).toEqual(some(1));
    expect(inverseHead([2, 3])).toEqual(some(0.5));
    expect(inverseHead([0, 3])).toBe(none);
    expect(inverseHead([])).toBe(none);
  });
});
