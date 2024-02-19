import { mealCategories, mealDetails, showMealsByCategory } from "@/typing";

export const getCategoryData = async (url: URL, cacheTime?: number) => {
  const options = {
    header: "GET",
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as mealCategories;

  return data;
};

export const getMealsCategory = async () => {
  const categoryURL = new URL(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const data = await getCategoryData(categoryURL);
  const usable = await data.categories;

  return usable;
};

export const getMealData = async (url: URL, cacheTime?: number) => {
  const options = {
    header: "GET",
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as showMealsByCategory;

  return data;
};

export const getMealDataByCategory = async (category: string) => {
  const categoryURL = new URL(
    "https://www.themealdb.com/api/json/v1/1/filter.php"
  );
  categoryURL.searchParams.set("c", category);

  const data = await getMealData(categoryURL);
  const usable = await data.meals;

  return usable;
};
export const getMealDetails = async (url: URL, cacheTime?: number) => {
  const options = {
    header: "GET",
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as mealDetails;

  return data;
};

export const getMealDetailsById = async (mealId: string) => {
  const categoryURL = new URL(
    "https://www.themealdb.com/api/json/v1/1/lookup.php"
  );
  categoryURL.searchParams.set("i", mealId);

  const data = await getMealDetails(categoryURL);
  const usable = await data.meals;

  return usable;
};
