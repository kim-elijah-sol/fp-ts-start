import { IO } from "./IO";

export const now: IO<number> = () => new Date().valueOf();
