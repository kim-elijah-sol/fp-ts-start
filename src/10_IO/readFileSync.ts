import { toError } from "fp-ts/lib/Either";
import { IOEither, tryCatch } from "fp-ts/lib/IOEither";
import * as fs from "fs";

export const readFileSync = (path: string): IOEither<Error, string> =>
  tryCatch(() => fs.readFileSync(path, "utf-8"), toError);
