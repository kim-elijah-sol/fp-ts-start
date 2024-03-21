import { IO } from "./IO";

export const log =
  (l: unknown): IO<void> =>
  () =>
    console.log(l);
