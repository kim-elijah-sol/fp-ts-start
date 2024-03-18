import { none, some } from "fp-ts/lib/Option";
import { inverse } from "./inverse";

describe("inverse", () => {
  it("inverse 로 number 의 역수 구하기", () => {
    expect(inverse(3)).toEqual(some(1 / 3));
    expect(inverse(2)).toEqual(some(0.5));
    expect(inverse(0)).toBe(none);
  });
});
