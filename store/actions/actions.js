import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./actionTypes";

export const addToFavoritesAction = (product) => {
  return {
    type: ADD_TO_FAVORITES,
    data: product,
  };
};

export const removeFromFavoritesAction = (product) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    data: product,
  };
};
