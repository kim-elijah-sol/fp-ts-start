import { min } from "./min";
import { ordNumber } from "./ordNumber";

describe("min", () => {
  it("ordNumber 를 사용한 min 으로 숫자 비교하기", () => {
    expect(min(ordNumber)(2, 1)).toBe(1);
    expect(min(ordNumber)(10, 20)).toBe(10);
  });
});
