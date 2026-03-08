function errorHandler(error, req, res, next) {
  const status = error.status || 500;
  const statusText = error.statusText || "Internal Server Error";
  const message = error.message || "An internal server error has occurred.";

  res.status(status).renderLayout("error", {
    status: status,
    statusText: statusText,
    message: message,
  });
}

module.exports = errorHandler;
