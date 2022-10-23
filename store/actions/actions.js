import { ADD_TO_FAVORITES } from "./actionTypes";

export const addToFavoritesAction = (product) => {
  return {
    type: ADD_TO_FAVORITES,
    data: product,
  };
};
