import { User } from "./User";
import { getFollowers } from "./getFollowers";

describe("getFollowers", () => {
  const userA: User = {
    followers: [],
  };
  const userB: User = {
    followers: [userA],
  };
  const userC: User = {
    followers: [userA, userB],
  };

  it("getFollowers 테스트 userA", () => {
    expect(getFollowers(userA)).toEqual([]);
  });

  it("getFollowers 테스트 userB", () => {
    expect(getFollowers(userB)).toEqual([userA]);
  });

  it("getFollowers 테스트 userC", () => {
    expect(getFollowers(userC)).toEqual([userA, userB]);
  });
});
