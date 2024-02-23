import { Eq } from "./eq";

/**
 * Eq 인스턴스를 인자로 받아서,
 * as 배열에 a가 포함되어 있는지 확인합니다.
 */
export function elem<A>(E: Eq<A>): (a: A, as: A[]) => boolean {
  return (a, as) => as.some((i) => E.equals(a, i));
}
