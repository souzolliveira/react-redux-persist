import * as types from './types';

const initialState = {
  whiteValue: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_WHITE_VALUE:
      return {
        ...state,
        whiteValue: action.newValue,
      };
    case types.CLEAN_VALUE:
      return {
        ...state,
        whiteValue: null,
      };
    default:
      return state;
  }
};

export default reducer;
