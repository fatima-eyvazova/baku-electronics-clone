import { ADD_TO_BASKET, ADD_TO_FAVORITES, ADD_TO_VIEWED, REMOVE_FROM_BASKET, REMOVE_FROM_FAVORITES } from "./actionTypes";

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

export const addToViewedAction = (product) => {
  return {
    type: ADD_TO_VIEWED,
    data: product,
  }
}

export const addToBasketAction = (product, count) => {
  return {
    type: ADD_TO_BASKET,
    data: product,
    count: count,
  };
};

export const removeFromBasketAction = (product) => {
  return {
    type: REMOVE_FROM_BASKET,
    data: product,
  };
};