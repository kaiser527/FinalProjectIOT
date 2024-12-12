import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
