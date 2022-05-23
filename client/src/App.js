import { Routes, Route } from "react-router-dom";
import FavoritesPage from "./components/FavoritesPage";
import FindRecipe from "./components/FindRecipe";
import Main from "./components/Main";
import Nav from "./components/Nav";
import RecipeDetail from "./components/RecipeDetail";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/findrecipe" element={<FindRecipe />} />
        <Route path="/:id" element={<RecipeDetail />} />
        <Route path="/favorite" element={<FavoritesPage/>}/>
      </Routes>
    </>
  );
}

export default App;
