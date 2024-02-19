import MealDetailsById from "@/components/MealDetailsById";
import { getMealDetailsById } from "@/lib/getData";

type Props = {
  params: {
    id: string;
  };
};

const DetailsId = async ({ params: { id } }: Props) => {
  const details = await getMealDetailsById(id);
  return (
    <div>
      {details.map((detail) => (
        <MealDetailsById key={detail.idMeal} detail={detail} />
      ))}
    </div>
  );
};

export default DetailsId;
