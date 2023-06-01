import { TRats } from "../RatRace";

export default function calcRatLeg(): TRats {
  const newRoll = () => {
    return Math.ceil(Math.random() * 6);
  };
  const rats = [0, 0, 0, 0, 0, 0];
  return rats.map((rat) => newRoll()) as TRats;
}
