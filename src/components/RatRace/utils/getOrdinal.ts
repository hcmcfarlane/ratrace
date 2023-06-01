export type TCardinal = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth"
];
const CARDINALS: TCardinal = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
];

export default function getOrdinal(cardinal: number): TCardinal {
  return CARDINALS[cardinal - 1] as unknown as TCardinal;
}
