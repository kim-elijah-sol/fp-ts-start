import { left, right } from "fp-ts/lib/Either";
import {
  chainPasswordValidation,
  hasCapital,
  hasNumber,
  minLength,
} from "./chainPasswordValidation";

describe("chainPasswordValidation", () => {
  it("minLength 함수 테스트", () => {
    expect(minLength("12345")).toEqual(left("비밀번호는 최소 6자리에요."));
    expect(minLength("123456")).toEqual(right("123456"));
  });

  it("hasCapital 함수 테스트", () => {
    expect(hasCapital("abcde")).toEqual(left("대문자를 포함해주세요."));
    expect(hasCapital("abCde")).toEqual(right("abCde"));
  });

  it("hasNumber 함수 테스트", () => {
    expect(hasNumber("password")).toEqual(left("숫자를 포함해주세요."));
    expect(hasNumber("password1")).toEqual(right("password1"));
  });

  it("chainPasswordValidation 테스트", () => {
    expect(chainPasswordValidation("passw")).toEqual(
      left("비밀번호는 최소 6자리에요.")
    );
    expect(chainPasswordValidation("password")).toEqual(
      left("대문자를 포함해주세요.")
    );
    expect(chainPasswordValidation("Password")).toEqual(
      left("숫자를 포함해주세요.")
    );
    expect(chainPasswordValidation("Password1")).toEqual(right("Password1"));
  });
});
