import { useSelector } from 'react-redux'
import OneRecipeFavoritesPage from './OneRecipeFavoritesPage'


const FavoritesPage = () => {
    const favorite = useSelector(state => state.favorite)
    return (
        <div className="mainpage">
            {favorite && favorite.map(el => <OneRecipeFavoritesPage key={el.id} id={el.id} img={el.img} description={el.description} title={el.title}/>)}
        </div>
    )
}

export default FavoritesPage
