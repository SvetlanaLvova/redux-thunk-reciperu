import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { THUNK_getRecipesFromDB } from "../redux/thunk/recipesThunk";
import Recipe from "./Recipe";

function FindRecipe() {
  const allRecipes = useSelector((state) => state.allRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(THUNK_getRecipesFromDB());
  }, []);

  const [input, setInput] = useState("");
  const inputHandler = (e) => setInput(e.target.value);

  const [filterResipes, setFilterResipes] = useState("");

  const buttonHandler = () => {
    const card = allRecipes.filter((allRecipes) => allRecipes.id === +input);
    setFilterResipes(card[0]); //card = [{}]
  };

  return (
    <>
      <div className="content" style={{ margin: "0 0 0 550px" }}>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="input id (1 - 10)"
              type="text"
              className="validate"
              value={input}
              onChange={inputHandler}
            />
            <button
              className="btn search-btn deep-orange accent-3"
              onClick={buttonHandler}
            >
              Search
            </button>
          </div>
        </div>
        <div style={{ margin: "0 0 0 90px" }}>
          <div>
            {filterResipes && <Recipe id={filterResipes.id} title={filterResipes.title} description={filterResipes.description} img={filterResipes.img} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default FindRecipe;
