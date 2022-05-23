import { GET_RECIPES } from "../types/recipesTypes"

export const ACTION_getRecipes = (recipesArray) => {
  return {
    type: GET_RECIPES,
    payload: recipesArray,
  }
}
