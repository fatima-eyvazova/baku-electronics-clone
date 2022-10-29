import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from "./reducers/rootReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorites', 'viewed'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
