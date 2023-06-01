import { TRats } from "../../RatRace";

export default function addRatRolls(rats: TRats, newRolls: TRats): TRats {
  const newArray = rats.map((ratScore, idx) => rats[idx] + newRolls[idx]);
  return newArray as TRats;
}
