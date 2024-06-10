import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All meals",
  description: "Browse the meals shared by the community",
};

async function FetchMeals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

const Meals = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created by{" "}
          <span className={classes.highlight}>you!</span>
        </h1>
        <p>Choose your favourite recipe and cook it yourself!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <FetchMeals />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;
