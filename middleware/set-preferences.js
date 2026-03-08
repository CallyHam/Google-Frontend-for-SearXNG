const { options } = require("../models/preferences");

function setPreferences(req, res, next) {
  var preferences = {};

  Object.entries(options).forEach(([id, option]) => {
    var value = req.cookies[id] ?? option.default;

    if (option.type === "select") {
      const choices = option.choices.map((choice) => choice.value);

      if (!choices.includes(value)) {
        value = option.default;
      }
    }

    preferences[id] = value;
  });

  res.locals.cookies = req.cookies;
  res.locals.preferences = preferences;

  next();
}

module.exports = setPreferences;
