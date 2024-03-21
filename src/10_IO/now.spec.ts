import { now } from "./now";

describe("now", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date(2023, 3, 21, 0, 0, 0, 0));
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it("now 테스트", () => {
    expect(now()).toBe(1682002800000);
  });
});
