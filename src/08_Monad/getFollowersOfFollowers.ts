import { flatten } from "fp-ts/lib/Array";
import { User } from "./User";
import { getFollowers } from "./getFollowers";

/**
 * flatten 을 사용하여 두 이펙트가 있는 프로그램을 합성
 *
 * - f : user => Array<User>
 * - g : user => Array<User>
 * - h : f ∘ g
 *
 * 결과적으로 Array<User> 으로 반환해야하기 때문에 flatten 으로 데이터를 평평하게 변환
 */
export const getFollowersOfFollowers = (user: User): Array<User> =>
  flatten(getFollowers(user).map(getFollowers));
