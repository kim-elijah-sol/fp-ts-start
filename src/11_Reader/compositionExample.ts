import { map } from "fp-ts/lib/Reader";
import { flow, pipe } from "fp-ts/lib/function";
import { Reader } from "./Reader";

const len = (s: string): number => s.length;
const double = (n: number): number => n * 2;
const gt2 = (n: number): boolean => n > 2;

/**
 * flow 와 pipe 를 사용한 함수 합성
 *
 * 아래 함수들은 모두 같은 동작을 합니다.
 */
export const compositionWithFlow: Reader<string, boolean> = flow(
  len,
  double,
  gt2
);
export const compositionWithPipe: Reader<string, boolean> = pipe(
  len,
  map(double),
  map(gt2)
);
export const compositionFlat: Reader<string, boolean> = (s: string) =>
  gt2(double(len(s)));
