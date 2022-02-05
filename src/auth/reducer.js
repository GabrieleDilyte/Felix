import * as types from "./types";

const DEFAULT_STATE = {
  user: {
    token: localStorage.getItem("user"),
    error: null,
  },
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          token: action.payload,
        },
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        user: {
          ...state.user,
          error: action.payload,
        },
      };
    }
    case types.LOGOUT: {
      return {
        ...state,
        user: {
          ...state.user,
          token: null,
        },
      };
    }
    default:
      return state;
  }
}

export default reducer;
