import { User } from "./User";
import { getFollowersOfFollowersWithChain } from "./getFollowersOfFollowersWithChain";

describe("getFollowersOfFollowersWithChain", () => {
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

  it("getFollowersOfFollowersWithChain 테스트 userD", () => {
    expect(getFollowersOfFollowersWithChain(userD)).toEqual([]);
  });

  it("getFollowersOfFollowersWithChain 테스트 userA", () => {
    expect(getFollowersOfFollowersWithChain(userA)).toEqual([]);
  });

  it("getFollowersOfFollowersWithChain 테스트 userB", () => {
    expect(getFollowersOfFollowersWithChain(userB)).toEqual([userD]);
  });

  it("getFollowersOfFollowersWithChain 테스트 userC", () => {
    expect(getFollowersOfFollowersWithChain(userC)).toEqual([userD, userA]);
  });
});
