import * as A from "fp-ts/lib/Array";
import * as O from "fp-ts/lib/Option";
import * as T from "fp-ts/lib/Task";
import { liftA2 } from "./liftA2";

describe("liftA2", () => {
  it("F: Option, g: (b: number) => (c: string) => boolean", () => {
    const g = (b: number) => (c: string) => c.length > b;
    const fb = O.some(2);
    const fc = O.some("abc");
    const result = liftA2(O.Apply)(g)(fb)(fc);
    expect(result).toEqual(O.some(true));
  });

  it("F: Option, g: (b: number) => (c: string) => boolean, none 처리", () => {
    const g = (b: number) => (c: string) => c.length > b;
    const fb = O.some(2);
    const fc = O.none;
    const result = liftA2(O.Apply)(g)(fb)(fc);
    expect(result).toBe(O.none);
  });

  it("F: Task, g: (b: number) => (c: string) => boolean", async () => {
    const g = (b: number) => (c: string) => c.length > b;
    const fb = () => Promise.resolve(2);
    const fc = () => Promise.resolve("abc");
    const result = await liftA2(T.ApplySeq)(g)(fb)(fc)();
    expect(result).toBe(true);
  });

  it("F: Task, g: (b: number) => (c: string) => boolean, reject 처리", async () => {
    const g = (b: number) => (c: string) => c.length > b;
    const fb = () => Promise.resolve(2);
    const fc = () => Promise.reject("error");
    await expect(liftA2(T.ApplySeq)(g)(fb)(fc)()).rejects.toBe("error");
  });

  it("F: Array, g: (b: number) => (c: string) => boolean", () => {
    const g = (b: number) => (c: string) => c.length > b;
    const fb = [2, 3];
    const fc = ["abc", "abcd"];
    const result = liftA2(A.Apply)(g)(fb)(fc);
    /**
     * 1번째 true : "abc".length > 2
     * 2번째 true : "abcd".length > 2
     * 3번째 false : "abc".length > 3
     * 4번째 true : "abcd".length > 3
     */
    expect(result).toEqual([true, true, false, true]);
  });
});
