import { none, some } from "fp-ts/lib/Option";
import { inverseHeadWithChain } from "./inverseHeadWithChain";

describe("inverseHeadWithChain", () => {
  it("inverseHeadWithChain 테스트", () => {
    expect(inverseHeadWithChain([1, 2, 3])).toEqual(some(1));
    expect(inverseHeadWithChain([2, 3])).toEqual(some(0.5));
    expect(inverseHeadWithChain([0, 3])).toBe(none);
    expect(inverseHeadWithChain([])).toBe(none);
  });
});
