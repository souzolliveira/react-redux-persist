import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import whiteReducer from './whiteReducer/reducer';
import blackReducer from './blackReducer/reducer';

const statesPersistConfig = {
  key: 'whietReducer',
  storage,
  whitelist: ['whiteValue'],
};

const rootReducer = combineReducers({
  whiteReducer: persistReducer(statesPersistConfig, whiteReducer),
  blackReducer: persistReducer(statesPersistConfig, blackReducer),
});

export default rootReducer;
