import * as types from "./types";

export const login = (user) => async (dispatch) => {
  fetch("https://academy-video-api.herokuapp.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.status === 400) {
        throw new Error("Failure: please check the login details");
      }
      return res.json();
    })
    .then((result) => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: result.token,
      });
      localStorage.setItem("user", result.token);
    })
    .catch((err) => {
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: err.message,
      });
    });
};

export const setUser = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const setLoginError = (payload) => ({
  type: types.LOGIN_FAILURE,
  payload,
});

export const logout = (payload) => {
  localStorage.setItem("user", "");
  return ({
  type: types.LOGOUT,
  payload,
})};
