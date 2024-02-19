import { getOrElse, isLeft, isRight } from "fp-ts/lib/Either";
import { get } from "./get";

describe("get", () => {
  /**
   * get 함수 내부에서 fetch 함수를 호출하고 있기 때문에 fetch 함수를 Mocking 합니다.
   */
  global.fetch = jest.fn((url: string) => {
    if (url === "https://solog.dev") {
      return Promise.resolve({
        json: () => Promise.resolve("success"),
      }) as Promise<Response>;
    }

    return Promise.reject("error");
  });

  it("get 함수로 비동기 데이터 가져오기에 성공한 경우", async () => {
    const result = await get<string>("https://solog.dev")();
    expect(isRight(result)).toBeTruthy();
    expect(getOrElse(() => "error")(result)).toBe("success");
  });

  it("get 함수로 비동기 데이터 가져오기에 실패한 경우", async () => {
    const result = await get<string>("https://error.dev")();
    expect(isLeft(result)).toBeTruthy();
    expect(getOrElse(() => "error")(result)).toBe("error");
  });
});
