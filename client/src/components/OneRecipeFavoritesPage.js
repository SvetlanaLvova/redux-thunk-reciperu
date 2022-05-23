import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const OneRecipeFavoritesPage = ({id, title, description, img}) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="mainpage">
        <div className="row" id={id}>
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img className="activator" src={img} alt={title} />
                <span className="card-title">{title}</span>
              </div>
              <div className="card-content">
                <p>{description}</p>
              </div>
              <div className="card-action">
                <Link to={`/${id}`}>Подробнее</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneRecipeFavoritesPage;
