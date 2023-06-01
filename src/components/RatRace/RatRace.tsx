import { useState } from "react";
import "./RatRace.css";
import { RatScore } from "./components/RatScore/RatScore";
import calcRatLeg from "./utils/calcRatLeg";

export type TRats = [number, number, number, number, number, number];
type TLeg = number;

export function RatRace() {
  const initaliseRats: TRats = [0, 0, 0, 0, 0, 0];
  const [rats, setRats] = useState<TRats>(initaliseRats);
  const [leg, setLeg] = useState<TLeg>(1);

  const resetGame = () => {
    setRats(initaliseRats);
    setLeg(1);
  };

  const rollLeg = () => {
    const newRolls: TRats = calcRatLeg();
    setRats(newRolls);
  };

  return (
    <div className="RatRace">
      <button onClick={resetGame}>Start new game</button>

      {/* TODO: disable button when leg = 6  */}
      <button onClick={rollLeg}>Roll first leg</button>

      {rats.map((rat, idx) => (
        <RatScore rat={idx + 1} score={rats[idx]} />
      ))}
    </div>
  );
}
