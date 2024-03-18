import { none, some } from "fp-ts/lib/Option";
import { flatten } from "./flatten";

describe("flatten", () => {
  it("flatten 테스트", () => {
    expect(flatten(some(some(3)))).toEqual(some(3));
    expect(flatten(some(some("success")))).toEqual(some("success"));
    expect(flatten(some(none))).toBe(none);
    expect(flatten(none)).toBe(none);
  });
});
