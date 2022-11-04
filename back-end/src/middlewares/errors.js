const NotFoundError = (message) => {
  const err = new Error(message);
  err.name = 'NotFoundError';
  throw err;
};

module.exports = NotFoundError;
