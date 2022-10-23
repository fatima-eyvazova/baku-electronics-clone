import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";

export const rootReducer = combineReducers({ favorites: favoritesReducer });

