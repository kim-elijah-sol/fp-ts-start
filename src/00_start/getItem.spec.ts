import { getEq, isNone, isSome, none, some } from "fp-ts/lib/Option";
import * as S from "fp-ts/string";
import { getItem } from "./getItem";

describe("getItem", () => {
  /**
   * localStorage.getItem 함수를 Mocking 합니다.
   */
  window.localStorage.__proto__.getItem = jest.fn((key) => {
    if (key === "success") return "success";
    return null;
  });

  const E = getEq(S.Eq);

  it("getItem 함수로 localStorage에 저장된 값을 가져오는 경우", () => {
    const result = getItem("success")();

    expect(isSome(result)).toBeTruthy();
    expect(E.equals(result, some("success"))).toBeTruthy();
  });

  it("getItem 함수로 localStorage에 저장된 값이 없는 경우", () => {
    const result = getItem("fail")();

    expect(isNone(result)).toBeTruthy();
    expect(E.equals(result, none)).toBeTruthy();
  });
});
