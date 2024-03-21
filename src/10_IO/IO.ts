/**
 * `IO` 는 절대 실패하지 않는 계산을 표현합니다.
 *
 * - ex ) localStorage 읽기/쓰기
 * - ex ) 현재 시간 얻기
 * - ex ) console 에 log 쓰기
 * - ex ) 임의의 숫자 얻기
 */
export interface IO<A> {
  (): A;
}
