import { combineReducers } from 'redux';
import reducer from './reducer/reducer';

const rootReducer = combineReducers({
  reducerExample: reducer,
});

export default rootReducer;
