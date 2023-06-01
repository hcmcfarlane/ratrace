interface IProps {
  rat: number;
  score: number;
}

export function RatScore({ rat, score }: IProps) {
  return (
    <div>
      <p>{`Rat #${rat} has ${score} points`}</p>
    </div>
  );
}
