import { map } from "fp-ts/lib/IO";
import { IO } from "./IO";
import { random } from "./random";

/**
 * `IO` 는 `Monad` 인스턴스를 허용하기에 `map` 을 사용할 수 있습니다.
 *
 * `map: <A, B>(f: (a: A) => B): (fa: IO<A>) => IO<B>`
 */
export const randomBool: IO<boolean> = map((n: number) => n > 0.5)(random);
