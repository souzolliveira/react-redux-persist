import * as types from './types';

const initialState = {
  blackValue: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BLACK_VALUE:
      return {
        ...state,
        blackValue: action.newValue,
      };
    case types.CLEAN_VALUE:
      return {
        ...state,
        blackValue: null,
      };
    default:
      return state;
  }
};

export default reducer;
