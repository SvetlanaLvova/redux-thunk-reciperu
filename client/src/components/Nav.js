import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="teal deep-orange lighten-2">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Recipe.ru
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/findrecipe">Find recipe</Link></li>
            <li><Link to="/favorite">Favorite recipes</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;




