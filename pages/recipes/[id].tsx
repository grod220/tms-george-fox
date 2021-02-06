import React from 'react';
import ShortHero from '../../components/shared/short-hero';
import RawIngredients from '../../components/recipes/raw-ingredients.jpg';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Recipes from '../../data/recipes';

export default function Recipe() {
  const router = useRouter();
  const recipeId = router.query.id as string;

  // Guard for server render. UseRouter hook only on hydration.
  if (!recipeId) return null;

  const recipe = Recipes.filter((r) => r.id === recipeId)[0];

  return (
    <>
      <Head>
        <title>{recipe.name} :: Recipe</title>
        <meta name="description" content={recipe.description} />
      </Head>
      <ShortHero image={RawIngredients} headline={recipe.name} />
      {recipe.name}
      {recipe.description}
      {recipe.ingredients}
      {recipe.directions}
    </>
  );
}
