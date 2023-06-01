import { useMemo, useState } from "react";
import "./RatRace.css";
import { RatScore } from "./components/RatScore/RatScore";
import calcRatLeg from "./utils/calcRatLeg";
import getOrdinal, { TCardinal } from "./utils/getOrdinal";
import clsx from "clsx";
import addRatRolls from "./utils/addRatRolls/addRatRolls";

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
    const newScores = addRatRolls(rats, newRolls);
    setRats(newScores);
    setLeg(leg + 1);
  };

  useMemo(() => {
    setOrdinal(getOrdinal(leg));
  }, [leg]);

  const isGameOver: boolean | undefined = leg >= 6;
  const rollButtonText = isGameOver ? "Game over!" : `Roll ${ordinal} leg`;

  return (
    <div className="RatRace">
      <h3>Current game – leg {leg}</h3>

      <button onClick={rollLeg} disabled={isGameOver}>
        {rollButtonText}
      </button>

      {rats.map((rat, idx) => (
        <RatScore rat={idx + 1} score={rats[idx]} key={idx} />
      ))}

      <button onClick={resetGame} className={clsx(isGameOver && "start-new")}>
        Start new game
      </button>
    </div>
  );
}
