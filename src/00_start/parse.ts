import { Either, tryCatch } from "fp-ts/lib/Either";

/**
 * JSON.parse 함수로 파싱에 실패한 경우 반환할 에러 타입입니다.
 */
export class ParseException extends Error {}

/**
 * 첫 번째 Error 는 실패했을 때 반환할 에러 타입이고, 두 번째 unknown은 성공했을 때 반환할 타입입니다.
 * JSON.parse 로 파싱되는 결과 값은 any 타입보다 unknown 타입이 더 안전하여 사용하였습니다.
 */
export function parse(s: string): Either<ParseException, unknown> {
  return tryCatch(
    () => JSON.parse(s),
    (reason) => new ParseException(String(reason))
  );
}
