import { monoidSum } from "./monoidSum";

describe("monoidSum", () => {
    it('monoidSum 의 empty 는 0 이다.', () => {
        expect(monoidSum.empty).toBe(0);
    })

    it("monoidSum 인스턴스로 숫자 더하기: 오른쪽, 왼쪽 항등식 만족", () => {
        const x = 1

        expect(monoidSum.concat(x, monoidSum.empty)).toBe(x);
        expect(monoidSum.concat(monoidSum.empty, x)).toBe(x);
    });
});