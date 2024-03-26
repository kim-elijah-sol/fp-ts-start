import { ask, chain } from "fp-ts/lib/Reader";
import { pipe } from "fp-ts/lib/function";
import { Dependencies2 } from "./Dependencies";
import { Reader } from "./Reader";
import { f } from "./readerDependenciesExample";

/**
 * true, false 여부를 Dependencies2 에서 받아올 수 있도록 수정
 *
 * ask 를 사용하여 deps 의 lowerBound 를 읽을 수 있습니다.
 */
export const g = (n: number): Reader<Dependencies2, string> =>
  pipe(
    ask<Dependencies2>(),
    chain((deps) => f(n > deps.lowerBound))
  );

export const h = (s: string): Reader<Dependencies2, string> => g(s.length + 1);
