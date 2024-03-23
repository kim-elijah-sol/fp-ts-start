import { getOrElse, isLeft, isRight } from "fp-ts/lib/Either";
import * as fs from "fs";
import { randomFile } from "./randomFile";

describe("randomFile", () => {
  jest.spyOn(fs, "readFileSync").mockImplementation((path) => {
    if (path === "1.txt") return "success";
    throw new Error(`${path} 파일 찾기 실패`);
  });

  it("randomFile 테스트 : randonInt 가 1을 반환하여 성공", () => {
    global.Math.random = jest.fn().mockReturnValue(0);

    const result = randomFile();

    expect(isRight(result)).toBe(true);
    expect(getOrElse(() => "fail")(result)).toBe("success");
  });

  it("randomFile 테스트 : randonInt 가 1을 반환하지 않아서 실패", () => {
    global.Math.random = jest.fn().mockReturnValue(1);

    const result = randomFile();

    expect(isLeft(result)).toBe(true);
    expect(getOrElse(() => "fail")(result)).toBe("fail");
  });
});
