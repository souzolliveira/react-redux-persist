import * as types from './types';

const initialState = {
  value: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_VALUE:
      return {
        ...state,
        value: action.newValue,
      };
    case types.CLEAN_VALUE:
      return {
        ...state,
        value: null,
      };
    default:
      return state;
  }
};

export default reducer;
