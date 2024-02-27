import { getYounger } from "./getYounger";

describe("getYounger", () => {
  it("getYounger 함수로 User 데이터 비교하기", () => {
    const age20User = {
      name: "a user",
      age: 20,
    };
    const age30User = {
      name: "b user",
      age: 30,
    };
    expect(getYounger(age20User, age30User)).toEqual(age20User);
    expect(getYounger(age30User, age20User)).toEqual(age20User);
  });
});
