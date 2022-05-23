import { initState } from '../init/initState';
import { GET_RECIPES } from '../types/recipesTypes';


export const recipesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return action.payload

    default: return state
  }
}
