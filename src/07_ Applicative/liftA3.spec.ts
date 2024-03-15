import * as A from "fp-ts/lib/Array";
import * as O from "fp-ts/lib/Option";
import * as T from "fp-ts/lib/Task";
import { liftA3 } from "./liftA3";

describe("liftA3", () => {
  it("F: Option, g: (b: string) => (c: string) => (d: number) => string", () => {
    const g = (b: string) => (c: string) => (d: number) =>
      b.length > c.length ? b.repeat(d) : c.repeat(d);
    const fb = O.some("ab");
    const fc = O.some("abc");
    const fd = O.some(2);
    const result = liftA3(O.Apply)(g)(fb)(fc)(fd);
    expect(result).toEqual(O.some("abcabc"));
  });

  it("F: Task, g: (b: string) => (c: string) => (d: number) => string", async () => {
    const g = (b: string) => (c: string) => (d: number) =>
      b.length > c.length ? b.repeat(d) : c.repeat(d);
    const fb = () => Promise.resolve("ab");
    const fc = () => Promise.resolve("abc");
    const fd = () => Promise.resolve(2);
    const result = await liftA3(T.ApplySeq)(g)(fb)(fc)(fd)();
    expect(result).toBe("abcabc");
  });

  it("F: Array, g: (b: string) => (c: number) => (d: boolean) => string", () => {
    const g = (b: string) => (c: number) => (d: boolean) => d ? b.repeat(c) : b;
    const fb = ["ab"];
    const fc = [3, 2];
    const fd = [true, false];
    const result = liftA3(A.Apply)(g)(fb)(fc)(fd);
    expect(result).toEqual(["ababab", "ab", "abab", "ab"]);
  });
});
