import { applicativeTask } from "./applicativeTask";

describe("applicativeTask", () => {
  it("applicativeTask.map 테스트 A = number, B = number", async () => {
    const fa = () => Promise.resolve(3);
    const f = (a: number) => a ** 2;
    const task = applicativeTask.map(fa, f);
    const result = await task();
    expect(result).toBe(9);
  });

  it("applicativeTask.map 테스트 A = number, B = number, reject 처리", async () => {
    const fa = () => Promise.reject("error");
    const f = (a: number) => a ** 2;
    const task = applicativeTask.map(fa, f);
    expect(task()).rejects.toBe("error");
  });

  it("applicativeTask.map 테스트 A = number, B = string", async () => {
    const fa = () => Promise.resolve(65);
    const f = (a: number) => String.fromCharCode(a);
    const task = applicativeTask.map(fa, f);
    const result = await task();
    expect(result).toBe("A");
  });

  it("applicativeTask.of 테스트 A = number", async () => {
    const task = applicativeTask.of(200);
    const result = await task();
    expect(result).toBe(200);
  });

  it("applicativeTask.of 테스트 A = string", async () => {
    const task = applicativeTask.of("success");
    const result = await task();
    expect(result).toBe("success");
  });

  it("applicativeTask.ap 테스트 fab: number => number, fa: number", async () => {
    const fab = () => Promise.resolve((a: number) => a ** 2);
    const fa = () => Promise.resolve(100);
    const task = applicativeTask.ap(fab, fa);
    const result = await task();
    expect(result).toBe(10000);
  });

  it("applicativeTask.ap 테스트 fab: reject, fa: number", async () => {
    const fab = () => Promise.reject("fab Error");
    const fa = () => Promise.resolve(100);
    const task = applicativeTask.ap(fab, fa);
    expect(task()).rejects.toBe("fab Error");
  });

  it("applicativeTask.ap 테스트 fab: number => number, fa: reject", async () => {
    const fab = () => Promise.resolve((a: number) => a ** 2);
    const fa = () => Promise.reject("fa Error");
    const task = applicativeTask.ap(fab, fa);
    expect(task()).rejects.toBe("fa Error");
  });

  it("applicativeTask.ap 테스트 fab: number => string, fa: number", async () => {
    const fab = () => Promise.resolve((a: number) => String.fromCharCode(a));
    const fa = () => Promise.resolve(66);
    const task = applicativeTask.ap(fab, fa);
    const result = await task();
    expect(result).toBe("B");
  });
});
