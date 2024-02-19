import convertIntoEmbed from "@/lib/convetIntoEmbed";
import { meal } from "@/typing";
import Image from "next/image";

import { GiHotMeal } from "react-icons/gi";
import { FaGlobe, FaTag } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";

const MealDetailsById = ({ detail }: { detail: meal }) => {
  return (
    <>
      <div className="max-h-96 relative overflow-hidden">
        <Image
          src={detail.strMealThumb}
          alt={detail.strMeal}
          width={1920}
          height={1080}
          className="object-cover object-center max-h-96"
        />
        <div className="absolute bg-slate-950/60 inset-0" />
        <h1 className="w-full text-center absolute top-1/2 -translate-y-1/2 font-bold text-lg lg:text-4xl capitalize text-white">
          {detail.strMeal}
        </h1>
      </div>
      <div className="lg:w-10/12 mx-auto grid grid-cols-12 my-5">
        <div className="col-span-12 lg:col-span-8 p-3">
          <h3 className="font-bold lg:text-3xl lg:mb-5">Descriptions:</h3>
          <p className="text-xs dark:text-slate-400">
            {detail.strInstructions}
          </p>
          <h3 className="font-bold lg:text-3xl lg:my-5">Ingredients:</h3>
          <div className="text-xs dark:text-slate-400 grid grid-cols-5 gap-3">
            {detail.strIngredient1 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure1}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient1}</span>
              </p>
            )}
            {detail.strIngredient2 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure2}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient2}</span>
              </p>
            )}
            {detail.strIngredient3 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure3}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient3}</span>
              </p>
            )}
            {detail.strIngredient4 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure3}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient4}</span>
              </p>
            )}
            {detail.strIngredient5 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure5}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient5}</span>
              </p>
            )}
            {detail.strIngredient6 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure6}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient6}</span>
              </p>
            )}
            {detail.strIngredient7 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure7}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient7}</span>
              </p>
            )}
            {detail.strIngredient8 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure8}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient8}</span>
              </p>
            )}
            {detail.strIngredient9 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure9}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient9}</span>
              </p>
            )}
            {detail.strIngredient10 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure10}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient10}</span>
              </p>
            )}
            {detail.strIngredient11 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure11}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient11}</span>
              </p>
            )}
            {detail.strIngredient12 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure12}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient12}</span>
              </p>
            )}
            {detail.strIngredient13 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure13}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient13}</span>
              </p>
            )}
            {detail.strIngredient14 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure14}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient14}</span>
              </p>
            )}
            {detail.strIngredient15 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure15}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient15}</span>
              </p>
            )}
            {detail.strIngredient16 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure16}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient16}</span>
              </p>
            )}
            {detail.strIngredient17 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure17}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient17}</span>
              </p>
            )}
            {detail.strIngredient18 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure18}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient18}</span>
              </p>
            )}
            {detail.strIngredient19 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure19}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient19}</span>
              </p>
            )}
            {detail.strIngredient20 && (
              <p className="rounded border p-2 flex flex-col justify-between items-start">
                <GiHotMeal className="h-6 w-6" />
                <span className="font-bold text-xl">{detail.strMeasure20}</span>
                <span>of</span>
                <span className="font-bold">{detail.strIngredient20}</span>
              </p>
            )}
          </div>
          <div>
            <h3 className="font-bold lg:text-3xl lg:my-5">
              Watch the tutorial:
            </h3>
            <iframe
              className="w-full"
              height="515"
              src={convertIntoEmbed(detail.strYoutube)}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* right side elements */}
        <div className="col-span-12 lg:col-span-4">
          <div className="m-3 grid grid-cols-5 gap-1">
            <button className="col-span-2 bg-white dark:bg-slate-950 border p-2 rounded-md hover:bg-green-600 hover:text-white dark:hover:bg-slate-600">
              Order
            </button>
            <button className="col-span-3 bg-green-600 text-white hover:bg-green-400 dark:bg-slate-600 dark:hover:bg-slate-500 border p-2 rounded-md">
              Add to cart
            </button>
          </div>
          <div className="bg-gray-50 dark:bg-slate-900 p-5 rounded-md m-3 text-sm">
            <p className="flex justify-between border-b-4 border-dotted py-2">
              <span className="font-bold flex gap-1 items-center">
                <FaFolder /> Category:{" "}
              </span>
              <span>{detail.strCategory}</span>
            </p>
            <p className="flex justify-between border-b-4 border-dotted py-2">
              <span className="font-bold flex gap-1 items-center">
                <FaGlobe /> Cuisine:{" "}
              </span>
              <span>{detail.strArea}</span>
            </p>
            <p className="flex justify-between border-b-4 border-dotted py-2">
              <span className="font-bold flex gap-1 items-center">
                <FaTag /> Tags:{" "}
              </span>
              <span>{detail.strTags}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealDetailsById;
