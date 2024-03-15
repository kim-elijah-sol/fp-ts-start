import { taskLift } from "./taskLift";

describe("taskLift", () => {
  it("B = string, C = number 인 경우", async () => {
    const g = (b: string) => b.length;

    const task = taskLift(g)(() => Promise.resolve("success"));

    const result = await task();

    expect(result).toBe(7);
  });

  it("B = number, C = boolean 인 경우", async () => {
    const g = (b: number) => b % 2 === 0;

    const task2 = taskLift(g)(() => Promise.resolve(2));
    const task3 = taskLift(g)(() => Promise.resolve(3));
    const task0 = taskLift(g)(() => Promise.resolve(0));

    const result2 = await task2();
    const result3 = await task3();
    const result0 = await task0();

    expect(result2).toBe(true);
    expect(result3).toBe(false);
    expect(result0).toBe(true);
  });

  it("reject 되는 경우", async () => {
    const g = (b: string) => b.length;

    const task = taskLift(g)(() => Promise.reject("fail"));

    expect(task()).rejects.toBe("fail");
  });
});
