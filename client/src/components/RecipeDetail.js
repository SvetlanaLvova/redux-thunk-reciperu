import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { THUNK_getRecipesFromDB } from "../redux/thunk/recipesThunk";

function RecipeDetail() {
  const allRecipes = useSelector((state) => state.allRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(THUNK_getRecipesFromDB());
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();

  const curRecipe = allRecipes.filter((e) => e.id === +id);

  return (
    <>
      
        <div className="content" style={{ margin: "0 350px 0 350px" }}>
          <div style={{ margin: "10px 350px 0 350px" }}>
            <h4>{curRecipe[0].title}</h4>
          </div>
          <div style={{ margin: "0 0 0 200px" }}>
          <img
            className="activator"
            src={curRecipe[0].img}
            alt={curRecipe[0].title}
          />
          </div>
          <div>{curRecipe[0].description}</div>
          <a
            className="waves-effect waves-light btn"
            onClick={() => navigate(-1)}
          >
            Назад
          </a>
        </div>
      
    </>
  );
}

export default RecipeDetail;
