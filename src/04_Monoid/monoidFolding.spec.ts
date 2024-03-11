import { concatAll } from "fp-ts/lib/Monoid";
import { monoidAll } from "./monoidAll";
import { monoidAny } from "./monoidAny";
import { monoidProduct } from "./monoidProduct";
import { monoidString } from "./monoidString";
import { monoidSum } from "./monoidSum";

describe("monoidFolding", () => {
  it("monoidSum folding", () => {
    expect(concatAll(monoidSum)([1, 2, 3, 4])).toBe(10);
  });

  it("monoidProduct folding", () => {
    expect(concatAll(monoidProduct)([1, 2, 3, 4])).toBe(24);
  });

  it("monoidString folding", () => {
    expect(concatAll(monoidString)(["a", "b", "c", "d"])).toBe("abcd");
  });

  it("monoidAll folding", () => {
    expect(concatAll(monoidAll)([true, false, true])).toBe(false);
    expect(concatAll(monoidAll)([true, true, true])).toBe(true);
  });

  it("monoidAny folding", () => {
    expect(concatAll(monoidAny)([true, false, true])).toBe(true);
    expect(concatAll(monoidAny)([false, false, false])).toBe(false);
  });
});
