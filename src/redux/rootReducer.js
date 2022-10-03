import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import whiteReducer from './whiteReducer/reducer';
import blackReducer from './blackReducer/reducer';

const persistConfig = {
  key: 'persistence',
  storage,
  whitelist: ['whiteValue'],
  blacklist: ['blackValue'],
};

const rootReducer = combineReducers({
  whiteReducer: persistReducer(persistConfig, whiteReducer),
  blackReducer: persistReducer(persistConfig, blackReducer),
});

export default rootReducer;
