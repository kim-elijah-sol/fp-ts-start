import { elem } from "./elem";
import { eqArrayOfPoints } from "./eqArrayOfPoints";
import { eqNumber } from "./eqNumber";
import { eqPoint } from "./eqPoint";
import { eqUser } from "./eqUser";
import { eqVector } from "./eqVector";

describe("elem", () => {
  it("elem 에 eqNumber 인스턴스로 숫자 데이터 포함 여부 확인하기", () => {
    expect(elem(eqNumber)(1, [1, 2, 3])).toBeTruthy();

    expect(elem(eqNumber)(4, [1, 2, 3])).toBeFalsy();
  });

  it("elem 에 eqPoint 인스턴스로 Point 데이터 포함 여부 확인하기", () => {
    expect(
      elem(eqPoint)({ x: 1, y: 2 }, [
        { x: 1, y: 2 },
        { x: 3, y: 4 },
        { x: 5, y: 6 },
      ])
    ).toBeTruthy();

    expect(
      elem(eqPoint)({ x: -1, y: 2 }, [
        { x: 1, y: 2 },
        { x: 3, y: 4 },
        { x: 5, y: 6 },
      ])
    ).toBeFalsy();
  });

  it("elem 에 eqVector 인스턴스로 Vector 데이터 포함 여부 확인하기", () => {
    expect(
      elem(eqVector)({ from: { x: 1, y: 2 }, to: { x: 3, y: 4 } }, [
        { from: { x: 5, y: 6 }, to: { x: 7, y: 8 } },
        { from: { x: 1, y: 2 }, to: { x: 3, y: 4 } },
        { from: { x: 9, y: 10 }, to: { x: 11, y: 12 } },
      ])
    ).toBeTruthy();

    expect(
      elem(eqVector)({ from: { x: 1, y: 2 }, to: { x: 3, y: 4 } }, [
        { from: { x: 5, y: 6 }, to: { x: 7, y: 8 } },
        { from: { x: 9, y: 10 }, to: { x: 11, y: 12 } },
      ])
    ).toBeFalsy();
  });

  it("elem 에 eqArrayOfPoints 인스턴스로 Point[] 데이터 포함 여부 확인하기", () => {
    expect(
      elem(eqArrayOfPoints)(
        [
          { x: 1, y: 2 },
          { x: 3, y: 4 },
        ],
        [
          [
            { x: 5, y: 6 },
            { x: 7, y: 8 },
          ],
          [
            { x: 1, y: 2 },
            { x: 3, y: 4 },
          ],
          [
            { x: 9, y: 10 },
            { x: 11, y: 12 },
          ],
        ]
      )
    ).toBeTruthy();

    expect(
      elem(eqArrayOfPoints)(
        [
          { x: 1, y: 2 },
          { x: 3, y: 4 },
        ],
        [
          [
            { x: 5, y: 6 },
            { x: 7, y: 8 },
          ],
          [
            { x: 9, y: 10 },
            { x: 11, y: 12 },
          ],
        ]
      )
    ).toBeFalsy();
  });

  it("elem 에 eqUser 인스턴스로 User 데이터 포함 여부 확인하기", () => {
    expect(
      elem(eqUser)({ userId: 1, name: "a user" }, [
        { userId: 1, name: "a" },
        { userId: 2, name: "b user" },
      ])
    ).toBeTruthy();

    expect(
      elem(eqUser)({ userId: 1, name: "a user" }, [
        { userId: 2, name: "a user" },
        { userId: 3, name: "c user" },
      ])
    ).toBeFalsy();
  });
});
