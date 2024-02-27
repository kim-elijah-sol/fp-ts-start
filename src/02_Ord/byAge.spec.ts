import { byAge } from "./byAge";

describe("byAge", () => {
  it("byAge 로 User 비교하기", () => {
    const age20User = {
      name: "a user",
      age: 20,
    };

    const age20User2 = {
      name: "b user",
      age: 20,
    };

    const age30User = {
      name: "c user",
      age: 30,
    };

    expect(byAge.compare(age20User, age20User2)).toBe(0);
    expect(byAge.compare(age20User, age30User)).toBe(-1);
    expect(byAge.compare(age30User, age20User)).toBe(1);
  });
});
