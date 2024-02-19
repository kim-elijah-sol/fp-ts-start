import { Left, Right, isLeft, isRight } from "fp-ts/lib/Either";
import { ParseException, parse } from "./parse";

describe("parse", () => {
  it("parse 함수로 파싱에 성공한 경우", () => {
    const s = '{"a": 1, "b": 2}';
    const result = parse(s);

    expect(isRight(result)).toBeTruthy();
    expect((result as Right<unknown>).right).toEqual({ a: 1, b: 2 });
  });

  it("parse 함수로 파싱에 실패한 경우", () => {
    const s = '{"a": 1, "b": 2';
    const result = parse(s);

    expect(isLeft(result)).toBeTruthy();
    /**
     * parse 에 실패하여 반환된 error 는 ParseException 타입입니다.
     */
    expect((result as Left<unknown>).left).toBeInstanceOf(ParseException);
    expect(
      ((result as Left<unknown>).left as ParseException).message
    ).toContain("SyntaxError: Unexpected");
  });
});
