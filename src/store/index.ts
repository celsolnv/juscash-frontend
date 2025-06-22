import { Store, AnyAction } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import { persistConfig } from "./modules/rootPersistors";
import rootReducer from "./modules/rootReducers";
import rootSaga from "./modules/rootSagas";

import { configureStore } from "@reduxjs/toolkit";

//--------------------------------------Configure Store--------------------------------------//

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store: Store<unknown, AnyAction> = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(sagaMiddleware)
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

//----------------------------------------- Exports ----------------------------------------//
export { store, persistor };
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
