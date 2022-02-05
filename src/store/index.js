import { createStore, combineReducers, applyMiddleware } from "redux";

import middleware from "./middleware";
import content from "../content";
import auth from "../auth";

const rootReducer = combineReducers({
  content: content.reducer,
  auth: auth.reducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default store;
