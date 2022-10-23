import { useSelector } from "react-redux";
import FavoriteItem from "../components/favoriteItem/favoriteItem";

const FavoritesPage = () => {
    const favs = useSelector(state => state.favorites.favoriteProducts);

    return (
        <ul>
            {favs.map(item => (
                <FavoriteItem key={item.name} product={item} />
            ))}
        </ul>
    )
}

export default FavoritesPage;