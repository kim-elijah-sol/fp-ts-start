import { reverse } from "fp-ts/lib/Ord";
import { Ord } from "./Ord";
import { byAge } from "./byAge";
import { min } from "./min";

/**
 * reverse 콤비네이터를 활용하여 min 의 연산 결과를 반대로 뒤집을 수 있습니다.
 */
const max = <A>(O: Ord<A>): ((x: A, y: A) => A) => min(reverse(O));

export const getOlder = max(byAge);
