import { semigroupString } from "./semigroupString";

describe("semigroupString", () => {
  it("semigroupString 인스턴스로 문자열 연결하기", () => {
    expect(semigroupString.concat("Hello ", "world")).toBe("Hello world");
    expect(semigroupString.concat("world_", "!!")).toBe("world_!!");
  });

  it("semigroupString 인스턴스로 문자열 연결하기 : (x + y) + z = x + (y + z) 만족", () => {
    const x = "Hello ";
    const y = "world_";
    const z = "!!";

    expect(semigroupString.concat(semigroupString.concat(x, y), z)).toBe(
      "Hello world_!!"
    );
    expect(semigroupString.concat(x, semigroupString.concat(y, z))).toBe(
      "Hello world_!!"
    );
  });
});
