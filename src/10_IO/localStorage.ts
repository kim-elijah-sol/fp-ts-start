import { Option, fromNullable } from "fp-ts/lib/Option";
import { IO } from "./IO";

export const getItem =
  (key: string): IO<Option<string>> =>
  () =>
    fromNullable(localStorage.getItem(key));

export const setItem =
  (key: string, value: string): IO<void> =>
  () =>
    localStorage.setItem(key, value);
