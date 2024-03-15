import { functorResponse } from "./functorResponse";

describe("functorResponse", () => {
  it("functorResponse.URI = 'Response'", () => {
    expect(functorResponse.URI).toBe("Response");
  });

  it("functorResponse map 함수 f: string -> number", () => {
    const f = (s: string) => s.length;

    const result = functorResponse.map(
      {
        url: "url",
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: "success",
      },
      f
    );

    expect(result).toEqual({
      url: "url",
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: 7,
    });
  });

  it("functorResponse map 함수 f: { text: string } -> string", () => {
    const f = (b: { text: string }) => b.text;

    const result = functorResponse.map(
      {
        url: "url",
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: {
          text: "response",
        },
      },
      f
    );

    expect(result).toEqual({
      url: "url",
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: "response",
    });
  });
});
