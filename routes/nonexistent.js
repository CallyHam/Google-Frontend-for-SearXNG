const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  const error = new Error();
  error.status = 404;
  error.statusText = "Not Found";
  error.message = req.originalUrl;
  next(error);
});

module.exports = router;
