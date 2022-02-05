const logger = (store) => (next) => (action) => {
  console.log("LOGGER: ", { store, next, action });

  next(action);
};

export default logger;
