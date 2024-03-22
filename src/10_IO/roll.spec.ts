import { chain } from "fp-ts/lib/IO";
import { randomInt } from "fp-ts/lib/Random";
import { log } from "./log";
import { roll } from "./roll";
import { withLogging } from "./withLogging";

describe("roll", () => {
  const spy = jest.spyOn(console, "log").mockImplementation();

  beforeEach(() => {
    spy.mockClear();
    global.Math.random = jest.fn().mockReturnValue(0.99);
  });

  it("roll 함수 테스트", () => {
    const D4 = randomInt(1, 4);
    const D10 = randomInt(1, 10);
    const D20 = randomInt(1, 20);
    const dice = [D4, D10, D20];
    expect(roll(dice)()).toBe(34);
  });

  it("roll + log 함수 chain 으로 묶기", () => {
    const D4 = randomInt(1, 4);
    const D10 = randomInt(1, 10);
    const D20 = randomInt(1, 20);
    const dice = [D4, D10, D20];
    chain((result) => log(`주사위 결과 : ${result}`))(roll(dice))();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("주사위 결과 : 34");
  });

  it("roll + log + withLogging 함수 chain 으로 묶고 값 순차적으로 출력", () => {
    const D4 = randomInt(1, 4);
    const D10 = randomInt(1, 10);
    const D20 = randomInt(1, 20);
    const dice = [D4, D10, D20];
    chain((result) => log(`주사위 결과 : ${result}`))(
      roll(dice.map(withLogging))
    )();
    expect(console.log).toHaveBeenCalledTimes(4);
    expect(console.log).toHaveBeenCalledWith("값 : 4");
    expect(console.log).toHaveBeenCalledWith("값 : 10");
    expect(console.log).toHaveBeenCalledWith("값 : 20");
    expect(console.log).toHaveBeenCalledWith("주사위 결과 : 34");
  });
});
