import { getOrElse, isLeft, isRight } from "fp-ts/lib/Either";
import * as fs from "fs";
import { readFileSync } from "./readFileSync";

describe("readFileSync", () => {
  jest.spyOn(fs, "readFileSync").mockImplementation((path) => {
    if (path === "success.txt") return "success";
    throw new Error(`${path} 파일 찾기 실패`);
  });

  it("readFileSync 테스트 : 성공", () => {
    const result = readFileSync("success.txt")();

    expect(isRight(result)).toBe(true);
    expect(getOrElse(() => "fail")(result)).toBe("success");
  });

  it("readFileSync 테스트 : 성공", () => {
    const result = readFileSync("fail.txt")();

    expect(isLeft(result)).toBe(true);
    expect(getOrElse(() => "fail")(result)).toBe("fail");
  });
});
