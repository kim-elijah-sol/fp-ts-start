import { eqUser } from "./eqUser";

describe("eqUser", () => {
  it("eqUser 로 User 비교하기", () => {
    const a = { userId: 1, name: "a user" };
    const b = { userId: 1, name: "b user" };
    const c = { userId: 2, name: "c user" };
    expect(eqUser.equals(a, b)).toBeTruthy();
    expect(eqUser.equals(a, c)).toBeFalsy();
  });
});
