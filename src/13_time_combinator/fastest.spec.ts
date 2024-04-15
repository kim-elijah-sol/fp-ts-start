import { of } from "fp-ts/lib/IO";
import { fastest } from "./fastest";

describe("fastest", () => {
  const baseTime = new Date().getTime();
  it("처음 실행된 IO 가 가장 빠른 경우", () => {
    let callCount = 0;
    jest.spyOn(Date.prototype, "getTime").mockImplementation(() => {
      return callCount++ % 2 ? baseTime + callCount : baseTime;
    });
    expect(fastest(of(40), [of(20), of(10)])()).toBe(40);
  });

  it("모두 동일하게 실행된 경우 : 첫 번째 실행 반환", () => {
    let callCount = 0;
    jest.spyOn(Date.prototype, "getTime").mockImplementation(() => {
      return callCount++ % 2 ? baseTime + 10 : baseTime;
    });
    expect(fastest(of(10), [of(20), of(30)])()).toBe(10);
  });
});
