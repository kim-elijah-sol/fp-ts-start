import { semigroupPoint } from "./semigroupPoint";

describe("semigroupPoint", () => {
  it("semigroupPoint 인스턴스로 Point 합치기", () => {
    expect(semigroupPoint.concat({ x: 1, y: 2 }, { x: 3, y: 4 })).toEqual({
      x: 4,
      y: 6,
    });
  });

  it("semigroupPoint 인스턴스로 Point 합치기 : (x + y) + z = x + (y + z) 만족", () => {
    const p1 = { x: 1, y: 2 };
    const p2 = { x: 3, y: 4 };
    const p3 = { x: 5, y: 6 };

    const xy_z = semigroupPoint.concat(semigroupPoint.concat(p1, p2), p3);

    const x_yz = semigroupPoint.concat(p1, semigroupPoint.concat(p2, p3));

    expect(xy_z).toEqual(x_yz);
  });
});
