import { none, some } from "fp-ts/lib/Option";
import { optionLift } from "./optionLift";

describe("optionLift", () => {
  it("B = string, C = number 인 경우", () => {
    const g = (b: string) => b.length;
    expect(optionLift(g)(none)).toBe(none);
    expect(optionLift(g)(some("aa"))).toEqual(some(2));
    expect(optionLift(g)(some(""))).toEqual(some(0));
  });

  it("B = number, C = boolean 인 경우", () => {
    const g = (b: number) => b % 2 === 0;
    expect(optionLift(g)(none)).toBe(none);
    expect(optionLift(g)(some(2))).toEqual(some(true));
    expect(optionLift(g)(some(3))).toEqual(some(false));
    expect(optionLift(g)(some(0))).toEqual(some(true));
  });
});
