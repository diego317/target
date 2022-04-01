import localForage from 'localforage';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import AppReducer from 'state/reducers';

const persistConfig = {
  key: 'root',
  storage: localForage,
  whitelist: ['session'],
};

const logger = createLogger({
  collapsed: true,
  predicate: (_, { type }) => type.slice(0,7) !== '@@router',
});

const persistedReducer = persistReducer(persistConfig, AppReducer);

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: {},
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger)
});

const persistor = persistStore(store);

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
