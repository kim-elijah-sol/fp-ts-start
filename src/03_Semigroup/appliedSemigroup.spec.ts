import { isNone, isSome, none, some } from "fp-ts/lib/Option";
import { appliedSemigroup } from "./appliedSemigroup";

describe("appliedSemigroup", () => {
  it("appliedSemigroup 함수 테스트 (none, none)", () => {
    const result = appliedSemigroup.concat(none, none);
    expect(result).toBe(none);
    expect(isNone(result)).toBeTruthy();
  });

  it("appliedSemigroup 함수 테스트 (none, some)", () => {
    const result = appliedSemigroup.concat(none, some(1));
    expect(result).toBe(none);
    expect(isNone(result)).toBeTruthy();
  });

  it("appliedSemigroup 함수 테스트 (some, some)", () => {
    const result = appliedSemigroup.concat(some(1), some(2));
    expect(result).toEqual(some(3));
    expect(isSome(result)).toBeTruthy();
  });
});
