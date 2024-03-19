import { chain } from "fp-ts/lib/Array";
import { User } from "./User";
import { getFollowers } from "./getFollowers";

export const getFollowersOfFollowersWithChain = (user: User): Array<User> =>
  chain(getFollowers)(getFollowers(user));
