export const getUser = (state) => state.auth.user.token;
export const getError = (state) => state.auth.user.error;
export const isLoggedIn = (state) => !!state.auth.user.token;