import { TRats } from "../../RatRace";
import addRatRolls from "./addRatRolls";

describe("addRatRolls", () => {
  const originalRolls = [3, 4, 6, 2, 2, 4] as TRats;
  const newRolls = [5, 6, 5, 6, 3, 2] as TRats;

  const expectedResult = [8, 10, 11, 8, 5, 6] as TRats;

  it("should correctly add new and old score arrays", () => {
    const newScores = addRatRolls(originalRolls, newRolls);

    expect(newScores).toEqual(expectedResult);
  });
});
