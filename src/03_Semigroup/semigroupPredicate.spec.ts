import { semigroupPredicate } from "./semigroupPredicate";

describe("semigroupPredicate", () => {
  it("semigroupPredicate 인스턴스로 Point 확인하기", () => {
    expect(
      semigroupPredicate.concat(
        ({ x }) => x === 1,
        ({ y }) => y === 2
      )({ x: 1, y: 2 })
    ).toBeTruthy();

    expect(
      semigroupPredicate.concat(
        ({ x }) => x === 1,
        ({ y }) => y !== 2
      )({ x: 1, y: 2 })
    ).toBeFalsy();
  });
});
