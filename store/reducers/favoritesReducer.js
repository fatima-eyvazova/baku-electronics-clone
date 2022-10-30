import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/actionTypes";

const initialState = {
  favoriteProducts: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteProducts: [...state.favoriteProducts, action.data],
      };
    case REMOVE_FROM_FAVORITES: {
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter(item => item.id !== action.data.id || item.title !== action.data.title),
      }
    }
  }
  return state;
};
