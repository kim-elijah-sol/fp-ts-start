import {
  compositionFlat,
  compositionWithFlow,
  compositionWithPipe,
} from "./compositionExample";

describe("compositionExample", () => {
  it.each([
    ["a", false],
    ["ab", true],
  ])(
    "compositionWithFlow, compositionWithPipe, compositionFlat (%s)는 %s를 반환해야 한다.",
    (input, expected) => {
      expect(compositionWithFlow(input)).toBe(expected);
      expect(compositionWithPipe(input)).toBe(expected);
      expect(compositionFlat(input)).toBe(expected);
    }
  );
});
