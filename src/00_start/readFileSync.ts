import { IOEither, tryCatch } from "fp-ts/lib/IOEither";
import * as fs from "fs";

export class ReadFileSyncError extends Error {}

/**
 *
 */
export function readFileSync(path: string): IOEither<Error, string> {
  return tryCatch(
    () => fs.readFileSync(path, "utf8"),
    (reason) => new ReadFileSyncError(String(reason))
  );
}
