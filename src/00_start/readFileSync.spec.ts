import { Left, getOrElse, isLeft, isRight } from "fp-ts/lib/Either";
import * as fs from "fs";
import { ReadFileSyncError, readFileSync } from "./readFileSync";

describe("readFileSync", () => {
  /**
   * fs 의 readFileSync 함수를 "success.txt" 가 주어지면 성공하도록 Mocking 합니다.
   */
  jest.spyOn(fs, "readFileSync").mockImplementation((path) => {
    if (path === "success.txt") return "success";
    throw new Error(`${path} is not found.`);
  });

  it("readFileSync 함수로 파일을 정상적으로 읽은 경우", () => {
    const result = readFileSync("success.txt")();
    expect(isRight(result)).toBeTruthy();
    expect(getOrElse(() => "fail")(result)).toBe("success");
  });

  it("readFileSync 함수로 파일을 읽다가 에러가 발생한 경우", () => {
    const result = readFileSync("fail.txt")();
    expect(isLeft(result)).toBeTruthy();
    expect(getOrElse(() => "fail")(result)).toBe("fail");
    expect((result as Left<unknown>).left).toBeInstanceOf(ReadFileSyncError);
    expect(
      ((result as Left<unknown>).left as ReadFileSyncError).message
    ).toContain(" is not found");
  });
});
