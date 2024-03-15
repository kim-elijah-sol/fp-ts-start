import { arrayLift } from "./arrayLift";

describe("arrayLift", () => {
  it("B = string, C = number 인 경우", () => {
    const g = (b: string) => b.length;
    const target = ["a", "ab", "abc"];
    expect(arrayLift(g)(target)).toEqual([1, 2, 3]);
  });

  it("B = boolean, C = string 인 경우", () => {
    const g = (b: boolean) => (b ? "success" : "fail");
    const target = [true, false, true];
    expect(arrayLift(g)(target)).toEqual(["success", "fail", "success"]);
  });
});
