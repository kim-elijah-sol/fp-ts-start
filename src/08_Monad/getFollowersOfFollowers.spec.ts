import { User } from "./User";
import { getFollowersOfFollowers } from "./getFollowersOfFollowers";

describe("getFollowersOfFollowers", () => {
  const userD: User = {
    followers: [],
  };
  const userA: User = {
    followers: [userD],
  };
  const userB: User = {
    followers: [userA],
  };
  const userC: User = {
    followers: [userA, userB],
  };

  it("getFollowersOfFollowers 테스트 userD", () => {
    expect(getFollowersOfFollowers(userD)).toEqual([]);
  });

  it("getFollowersOfFollowers 테스트 userA", () => {
    expect(getFollowersOfFollowers(userA)).toEqual([]);
  });

  it("getFollowersOfFollowers 테스트 userB", () => {
    expect(getFollowersOfFollowers(userB)).toEqual([userD]);
  });

  it("getFollowersOfFollowers 테스트 userC", () => {
    expect(getFollowersOfFollowers(userC)).toEqual([userD, userA]);
  });
});
