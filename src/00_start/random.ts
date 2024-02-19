import { IO } from "fp-ts/lib/IO";

/**
 * Math.random 함수는 실패하는 경우가 존재하지 않지만
 * 부수 효과를 가지고 있기 때문에 IO 타입으로 감싸서 반환합니다.
 *
 * ex ) 파일 시스템, 네트워크, 데이터베이스 등과 같은 외부 환경과 상호작용하는 함수
 */
export function random(): IO<number> {
  return Math.random;
}
