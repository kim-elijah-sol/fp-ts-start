import { isNone, isSome, none, some } from "fp-ts/lib/Option";
import { firstMonoid } from "./firstMonoid";

describe("firstMonoid", () => {
  it("firstMonoid.concat (none, none)", () => {
    const result = firstMonoid.concat(none, none);
    expect(result).toEqual(none);
    expect(isNone(result)).toBeTruthy();
  });

  it("firstMonoid.concat (some, none)", () => {
    const result = firstMonoid.concat(some(1), none);
    expect(result).toEqual(some(1));
    expect(isSome(result)).toBeTruthy();
  });

  it("firstMonoid.concat (none, some)", () => {
    const result = firstMonoid.concat(none, some(1));
    expect(result).toEqual(some(1));
    expect(isSome(result)).toBeTruthy();
  });

  it("firstMonoid.concat (some, some)", () => {
    const result = firstMonoid.concat(some(1), some(2));
    expect(result).toEqual(some(1));
    expect(isSome(result)).toBeTruthy();
  });
});
