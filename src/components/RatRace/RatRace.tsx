import { useMemo, useState } from "react";
import "./RatRace.css";
import { RatScore } from "./components/RatScore/RatScore";
import calcRatLeg from "./utils/calcRatLeg";
import getOrdinal, { TCardinal } from "./utils/getOrdinal";

export type TRats = [number, number, number, number, number, number];
type TLeg = number;

export function RatRace() {
  const initaliseRats: TRats = [0, 0, 0, 0, 0, 0];
  const initialiseCardinal = getOrdinal(1);
  const initaliseLeg: TLeg = 1;

  const [rats, setRats] = useState<TRats>(initaliseRats);
  const [leg, setLeg] = useState<TLeg>(initaliseLeg);
  const [ordinal, setOrdinal] = useState<TCardinal>(initialiseCardinal);

  const resetGame = () => {
    setRats(initaliseRats);
    setLeg(1);
  };

  const rollLeg = () => {
    const newRolls: TRats = calcRatLeg();
    setRats(newRolls);
    setLeg(leg + 1);
  };

  useMemo(() => {
    setOrdinal(getOrdinal(leg));
  }, [leg]);

  return (
    <div className="RatRace">
      <button onClick={resetGame}>Start new game</button>
      <h3>Current game – leg {leg}</h3>

      {/* TODO: disable button when leg = 6  */}
      <button onClick={rollLeg}>Roll {ordinal} leg</button>

      {rats.map((rat, idx) => (
        <RatScore rat={idx + 1} score={rats[idx]} />
      ))}
    </div>
  );
}
