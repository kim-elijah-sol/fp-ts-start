/**
 * `Reader` 모나드의 목적은 필요한 곳에서 인자를 얻기 위해 여러 함수를 통해 인자가 전달되는 것을 방지하는 것입니다.
 *
 * 이에 대한 아이디어는 `의존성 주입(Dependency Injection)` 입니다.
 *
 * - `R` : 계산에 필요한 환경
 * - `A` : 계산 결과
 */
export interface Reader<R, A> {
  (r: R): A;
}
