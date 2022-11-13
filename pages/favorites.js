import { useSelector } from "react-redux";
import FavoriteItem from "../components/favoriteItem/favoriteItem";
import CustomHead from "../components/customHead/customHead";

const FavoritesPage = () => {
    const favs = useSelector(state => state.favorites.favoriteProducts);

    return (
        <>
            <CustomHead title='Sechilmishler' />
            <ul className="favori-items">
                {favs.map(item => (
                    <FavoriteItem key={item.name} product={item} />
                ))}
            </ul>
        </>
    )
}

export default FavoritesPage;