import { pipe } from "fp-ts/lib/function";
import * as N from "fp-ts/number";
import * as S from "fp-ts/string";
import { contramp, eqUser, eqUsers } from "./contramp";

describe("contramp", () => {
  it("contramp 테스트 : string -> number", () => {
    const eqNumber = pipe(
      N.Eq,
      contramp((n: string) => Number(n))
    );
    expect(eqNumber.equals("1", "1")).toBe(true);
    expect(eqNumber.equals("1", "2")).toBe(false);
  });

  it("contramp 테스트 : number => string", () => {
    const eqString = pipe(
      S.Eq,
      contramp((s: number) => s.toString())
    );
    expect(eqString.equals(1, 1)).toBe(true);
    expect(eqString.equals(1, 2)).toBe(false);
  });

  it("eqUser 테스트", () => {
    expect(
      eqUser.equals({ id: 1, name: "name" }, { id: 1, name: "name" })
    ).toBe(true);
    expect(
      eqUser.equals({ id: 1, name: "name" }, { id: 2, name: "name" })
    ).toBe(false);
  });

  it("eqUsers 테스트", () => {
    expect(
      eqUsers.equals(
        [
          { id: 1, name: "name1" },
          { id: 2, name: "name2" },
        ],
        [
          { id: 1, name: "name1" },
          { id: 2, name: "name3" },
        ]
      )
    ).toBe(true);
    expect(
      eqUsers.equals(
        [
          { id: 1, name: "name1" },
          { id: 2, name: "name2" },
        ],
        [
          { id: 1, name: "name1" },
          { id: 3, name: "name2" },
        ]
      )
    ).toBe(false);
  });
});
