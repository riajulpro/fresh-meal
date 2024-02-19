import { getMealsCategory } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";

const MealCategory = async () => {
  const mealCategory = await getMealsCategory();

  return (
    <>
      <div className="-mt-10 lg:-mt-32 z-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 w-11/12 lg:w-10/12 mx-auto my-2 lg:my-5">
        <h2 className="lg:text-2xl font-bold z-30 border-4 p-5 bg-gray-100 dark:bg-slate-800 rounded-md">
          Choose Your Meal Category
        </h2>
        {mealCategory.map((category) => (
          <Link
            key={category.idCategory}
            href={`/category/${category.strCategory}`}
            className="transform hover:scale-105 transition duration-200"
          >
            <div
              key={category.idCategory}
              className="border rounded-md bg-slate-100 dark:bg-slate-900 hover:drop-shadow-lg duration-150 ease-in-out overflow-hidden cursor-pointer"
            >
              <div className="flex justify-center">
                <Image
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-2">
                <h3 className="font-bold">{category.strCategory}</h3>
                <p className="line-clamp-3 text-xs">
                  {category.strCategoryDescription}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MealCategory;
