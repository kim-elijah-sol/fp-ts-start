import { getOlder } from "./getOlder";

describe("getOlder", () => {
  it("getOlder 함수로 User 데이터 비교하기", () => {
    const age20User = {
      name: "a user",
      age: 20,
    };
    const age30User = {
      name: "b user",
      age: 30,
    };
    expect(getOlder(age20User, age30User)).toEqual(age30User);
    expect(getOlder(age30User, age20User)).toEqual(age30User);
  });
});
