const utils = require("../helpers/utils");

function attachUtils(req, res, next) {
  res.locals.utils = utils;
  next();
}

module.exports = attachUtils;
