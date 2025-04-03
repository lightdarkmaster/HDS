import { depressionAdviceList } from "../data/adviceList";

type Props = {
  score: number;
};

const AdviceCard: React.FC<Props> = ({ score }) => {
  const advice = depressionAdviceList.find(
    (item) => score >= item.minScore && score <= item.maxScore
  );

  if (!advice) {
    return <p>No advice available for this score.</p>;
  }

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{advice.severity}</h2>
      <p>{advice.recommendation}</p>
    </div>
  );
};

export default AdviceCard;
