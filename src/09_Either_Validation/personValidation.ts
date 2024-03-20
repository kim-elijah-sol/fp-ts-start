import { sequenceT } from "fp-ts/lib/Apply";
import { Either, left, map, right } from "fp-ts/lib/Either";
import { NonEmptyArray } from "fp-ts/lib/NonEmptyArray";
import { pipe } from "fp-ts/lib/function";
import { applicativeValidation } from "./applicativeValidation";
import { lift } from "./lift";

type Person = {
  name: string;
  age: number;
};

export const validateName = lift(
  (s: string): Either<string, string> =>
    s.length > 0 ? right(s) : left("이름 유효성 실패")
);

export const validateAge = lift(
  (n: number): Either<string, number> =>
    !isNaN(+n) ? right(n) : left("나이 유효성 실패")
);

export const toPerson = ([name, age]: [string, number]): Person => ({
  name,
  age,
});

export const personValidation = (
  p: Person
): Either<NonEmptyArray<string>, Person> =>
  pipe(
    sequenceT(applicativeValidation)(validateName(p.name), validateAge(p.age)),
    map(toPerson)
  );
