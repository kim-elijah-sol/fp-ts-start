import { IO } from "fp-ts/lib/IO";
import { Option, fromNullable } from "fp-ts/lib/Option";

/**
 * localStorage.getItem 함수는 부수 효과를 가지면서도
 * 반환 값이 nullable 이기 때문에 IO와 Option 타입으로 감싸서 반환합니다.
 */
export function getItem(key: string): IO<Option<string>> {
  return () => fromNullable(localStorage.getItem(key));
}
