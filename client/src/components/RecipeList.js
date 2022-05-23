import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { THUNK_getRecipesFromDB } from "../redux/thunk/recipesThunk";
import Recipe from "./Recipe";

function RecipeList() {
  const allRecipes = useSelector((state) => state.allRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(THUNK_getRecipesFromDB());
  }, []);

  return (
    <>
      <div className="mainpage">
        {allRecipes && allRecipes.map((recipe) => <Recipe key={recipe.id} id={recipe.id} img={recipe.img} description={recipe.description} title={recipe.title} />)}
      </div>
    </>
  );
}

export default RecipeList;
