import thunk from "redux-thunk";
import logger from "./logger";

const allMiddleware = [logger, thunk];

export default allMiddleware;
