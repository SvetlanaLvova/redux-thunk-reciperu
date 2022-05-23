import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { ACTION_addToFavorite } from '../redux/actions/favoriteActions';


function Recipe({id, title, description, img}) {
  const dispatch = useDispatch()

  const favoriteHandler = () => {
    dispatch(ACTION_addToFavorite({id, title, description, img}))
  }

  return (
    <>
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
            <a class="waves-effect waves-light btn pink lighten-3" onClick={favoriteHandler} >Like</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe;
