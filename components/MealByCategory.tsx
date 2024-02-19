"use client";

import { showMealByCategory } from "@/typing";
import Image from "next/image";
import Link from "next/link";

function MealByCategory({ meal }: { meal: showMealByCategory }) {
  return (
    <Link href={`/item/${meal.idMeal}`}>
      <div className="overflow-hidden rounded-md relative group cursor-pointer">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={500}
          height={500}
          className="object-cover"
        />
        <div className="absolute lg:group-hover:inset-0 bg-gradient-to-t from-gray-400 dark:from-slate-950 via-slate-50/0 to-transparent duration-150" />
        <span className="absolute top-2 right-0 lg:-right-20 lg:group-hover:right-0 dark:bg-slate-950/75 bg-white/75 p-2 rounded-l-md text-black dark:text-white text-xs duration-200 ease-in-out">
          See details
        </span>
        <h3 className="absolute bottom-0 lg:-bottom-24 lg:group-hover:bottom-0 duration-300 ease-out w-full p-2 bg-transparent text-white">
          {meal.strMeal}
        </h3>
      </div>
    </Link>
  );
}

export default MealByCategory;
