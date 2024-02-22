import { eqVector } from "./eqVector";

describe("eqVector", () => {
  it("eqVector 인스턴스로 Vector 비교하기", () => {
    // 서로 같은 값
    const v1 = { from: { x: 1, y: 1 }, to: { x: 2, y: 2 } };
    const v2 = { from: { x: 1, y: 1 }, to: { x: 2, y: 2 } };

    // 다른 값
    const v3 = { from: { x: 2, y: 2 }, to: { x: 1, y: 1 } };
    expect(eqVector.equals(v1, v2)).toBe(true);
    expect(eqVector.equals(v1, v3)).toBe(false);
  });
});
