import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {systemReducer} from './system/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  system: systemReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

export const persistor = persistStore(store, undefined, () => {
  // we only should do it only 1 time when user installs & opens the app for the first time
});
