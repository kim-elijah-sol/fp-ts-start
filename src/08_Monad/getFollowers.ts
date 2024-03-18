import { User } from "./User";

export const getFollowers = (user: User): Array<User> => user.followers;
