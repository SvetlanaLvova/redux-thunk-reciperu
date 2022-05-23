import { initState } from "../init/initState"
import { ADD_TO_FAVORITE } from "../types/recipesTypes"

export const favoriteReducer = (state = initState, action) => {
  switch (action.type) {
      case ADD_TO_FAVORITE :
          if (state.includes(action.payload)) {
              return state
          }
          return [...state, action.payload]

      default:
          return state
  }
}
