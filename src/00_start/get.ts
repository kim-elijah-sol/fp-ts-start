import { TaskEither, tryCatch } from "fp-ts/lib/TaskEither";

export class GetException extends Error {}

export function get<Response>(url: string): TaskEither<GetException, Response> {
  return tryCatch(
    () => fetch(url).then((response) => response.json()),
    (reason) => new GetException(String(reason))
  );
}
