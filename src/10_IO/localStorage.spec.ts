import { isNone, isSome, none, some } from "fp-ts/lib/Option";
import { getItem, setItem } from "./localStorage";

type Store = {
  [key in string]: string;
};

describe("localStorage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    const store: Store = {};
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockImplementation((key: string) => store[key]);
    jest
      .spyOn(Storage.prototype, "setItem")
      .mockImplementation((key: string, value: string) => {
        store[key] = value;
      });
  });

  it("setItem 테스트", () => {
    setItem("k1", "v1")();
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith("k1", "v1");
  });

  it("getItem 테스트 : none", () => {
    const result = getItem("k1")();
    expect(isNone(result)).toBe(true);
    expect(result).toBe(none);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith("k1");
  });

  it("getItem 테스트 : some", () => {
    setItem("k1", "v1")();
    const result = getItem("k1")();
    expect(isSome(result)).toBe(true);
    expect(result).toEqual(some("v1"));
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith("k1");
  });
});
