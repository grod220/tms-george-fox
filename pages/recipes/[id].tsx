import React from 'react';
import ShortHero from '../../components/shared/short-hero';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Recipes from '../../data/recipes';
import RecipeContent from '../../components/recipe/recipe-content';

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
      <ShortHero image={recipe.image} headline={`${recipe.name} Recipe`} />
      <RecipeContent recipe={recipe} />
    </>
  );
}
