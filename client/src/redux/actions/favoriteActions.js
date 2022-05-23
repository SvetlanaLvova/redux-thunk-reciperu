import { ADD_TO_FAVORITE } from "../types/recipesTypes";

export const ACTION_addToFavorite = (allRecipes) => ({
  type: ADD_TO_FAVORITE,
  payload: allRecipes
})


