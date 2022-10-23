import { ADD_TO_FAVORITES } from "../actions/actionTypes";

const initialState = {
  favoriteProducts: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoritesReducer: [...state.favoriteProducts, action.data],
      };
  }
  return state;
};
