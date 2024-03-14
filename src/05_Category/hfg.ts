/**
 * 문자열의 길이를 반환하는 함수
 */
export function f(s: string): number {
  return s.length;
}

/**
 * 숫자가 2보다 큰지 확인하는 함수
 */
export function g(n: number): boolean {
  return n > 2;
}

/**
 * h = g ∘ f
 *
 * 문자열을 받아서 길이를 구하고, 그 길이가 2보다 큰지 확인하는 함수
 */
export function h(s: string): boolean {
  return g(f(s));
}
