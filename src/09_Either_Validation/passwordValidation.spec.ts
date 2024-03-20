import { left, right } from "fp-ts/lib/Either";
import { passwordValidation } from "./passwordValidation";

describe("passwordValidation", () => {
  it("passwordValidation 테스트 : 3개 오류 수집", () => {
    expect(passwordValidation("ab")).toEqual(
      left([
        "비밀번호는 최소 6자리에요.",
        "대문자를 포함해주세요.",
        "숫자를 포함해주세요.",
      ])
    );
  });

  it("passwordValidation 테스트 : 2개 오류 수집", () => {
    expect(passwordValidation("pass1")).toEqual(
      left(["비밀번호는 최소 6자리에요.", "대문자를 포함해주세요."])
    );

    expect(passwordValidation("Passw")).toEqual(
      left(["비밀번호는 최소 6자리에요.", "숫자를 포함해주세요."])
    );

    expect(passwordValidation("password")).toEqual(
      left(["대문자를 포함해주세요.", "숫자를 포함해주세요."])
    );
  });

  it("passwordValidation 테스트 : 1개 오류 수집", () => {
    expect(passwordValidation("Pass1")).toEqual(
      left(["비밀번호는 최소 6자리에요."])
    );

    expect(passwordValidation("password1")).toEqual(
      left(["대문자를 포함해주세요."])
    );

    expect(passwordValidation("Password")).toEqual(
      left(["숫자를 포함해주세요."])
    );
  });

  it("passwordValidation 테스트 : 통과", () => {
    expect(passwordValidation("Password1")).toEqual(right("Password1"));
  });
});
