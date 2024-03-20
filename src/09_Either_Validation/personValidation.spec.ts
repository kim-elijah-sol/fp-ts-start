import { left, right } from "fp-ts/lib/Either";
import {
  personValidation,
  toPerson,
  validateAge,
  validateName,
} from "./personValidation";

describe("personValidation", () => {
  it("validateName 함수 테스트", () => {
    expect(validateName("")).toEqual(left(["이름 유효성 실패"]));
    expect(validateName("ㄱ")).toEqual(right("ㄱ"));
  });

  it("validateAge 함수 테스트", () => {
    const invalidNumber = "abc" as unknown as number;

    expect(validateAge(invalidNumber)).toEqual(left(["나이 유효성 실패"]));
    expect(validateAge(20)).toEqual(right(20));
  });

  it("toPerson 테스트", () => {
    expect(toPerson(["이름", 20])).toEqual({
      name: "이름",
      age: 20,
    });
  });

  it("personValidation 테스트 : 2개 오류 수집", () => {
    const invalidNumber = "abc" as unknown as number;

    expect(
      personValidation({
        name: "",
        age: invalidNumber,
      })
    ).toEqual(left(["이름 유효성 실패", "나이 유효성 실패"]));
  });

  it("personValidation 테스트 : 1개 오류 수집", () => {
    const invalidNumber = "abc" as unknown as number;

    expect(
      personValidation({
        name: "",
        age: 20,
      })
    ).toEqual(left(["이름 유효성 실패"]));

    expect(
      personValidation({
        name: "이름",
        age: invalidNumber,
      })
    ).toEqual(left(["나이 유효성 실패"]));
  });

  it("personValidation 테스트 : 통과", () => {
    expect(
      personValidation({
        name: "이름",
        age: 20,
      })
    ).toEqual(
      right({
        name: "이름",
        age: 20,
      })
    );
  });
});
