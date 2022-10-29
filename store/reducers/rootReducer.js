import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { favoritesReducer } from "./favoritesReducer";
import { viewedReducer } from "./viewedReducer";

export const rootReducer = combineReducers({
    favorites: favoritesReducer,
    basket: basketReducer,
    viewed: viewedReducer,
});

