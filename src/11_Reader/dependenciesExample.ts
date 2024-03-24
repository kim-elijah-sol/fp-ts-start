import { Dependencies } from "./Dependencies";

/**
 * f 함수에서 deps 추가로 모든 함수에 deps 가 추가되는 문제 발생
 */
export const f = (b: boolean, deps: Dependencies): string =>
  b ? deps.i18n.true : deps.i18n.false;

export const g = (n: number, deps: Dependencies): string => f(n > 2, deps);

export const h = (s: string, deps: Dependencies): string =>
  g(s.length + 1, deps);
