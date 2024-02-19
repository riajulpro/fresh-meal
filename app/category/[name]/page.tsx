import MealByCategory from "@/components/MealByCategory";
import { getMealDataByCategory } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    name: string;
  };
};

const CategoryName = async ({ params: { name } }: Props) => {
  const currentCategory = decodeURI(name);
  const meals = await getMealDataByCategory(currentCategory);

  return (
    <>
      <div className="relative">
        <Image
          src="https://i.ibb.co/W3wHtrj/cover.jpg"
          alt="Cover"
          height={1080}
          width={1920}
          className="overflow-hidden object-cover max-h-svh"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/25 via-[#020817]/25 to-[#020817]/25 flex justify-center items-center">
          <div className="lg:-mt-14 text-white">
            <h1 className="text-xl lg:text-5xl font-bold text-shadow">
              Category name is: {currentCategory}
            </h1>
            <p className="text-center text-shadow">
              Choose your meal and Enjoy!
            </p>
          </div>
        </div>
      </div>
      <div className="lg:-mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-11/12 lg:w-10/12 mx-auto my-5">
        {meals.map((meal) => (
          <MealByCategory key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
};

export default CategoryName;
