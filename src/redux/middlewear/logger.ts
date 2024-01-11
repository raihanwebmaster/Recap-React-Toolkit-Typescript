/** @format */

const logger = () => (next) => (action) => {
  next(action);
};

export default logger;
