import axios from 'axios';

import { ACTION_getRecipes } from '../actions/actions';


export const THUNK_getRecipesFromDB = () => async (dispatch) => {
  const response = await axios.get(`http://localhost:3001/recipe`)
  dispatch(ACTION_getRecipes(response.data.allRecipes))
}
