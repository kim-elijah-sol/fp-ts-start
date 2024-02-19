import { IOEither, tryCatch } from "fp-ts/lib/IOEither";
import * as fs from "fs";

export class ReadFileSyncError extends Error {}

/**
 * readFileSync 함수는 실패하는 경우도 존재하고,
 * 부수 효과도 있는 함수이므로 IOEither  감싸서 반환합니다.
 *
 * readFileSync 로 파일 읽기에 성공 했을 때 파일의 내용을 반환하므로 string 타입을 사용했습니다.
 */
export function readFileSync(
  path: string
): IOEither<ReadFileSyncError, string> {
  return tryCatch(
    () => fs.readFileSync(path, "utf8"),
    (reason) => new ReadFileSyncError(String(reason))
  );
}
