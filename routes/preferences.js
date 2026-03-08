const express = require("express");
const router = express.Router();

const { checkInstance } = require("../helpers/search");

const { groups, options } = require("../models/preferences");

router.get("/", async (req, res) => {
  res.renderLayout("preferences", { groups: groups, options: options, cookies: req.cookies });
});

router.post("/set", async (req, res) => {
  const cookieOptions = {
    httpOnly: false,
    secure: false,
    sameSite: "lax",
    expires: new Date("Tue, 19 Jan 2038 03:14:07 GMT"),
  };

  Object.entries(options).forEach(([id, option]) => {
    var value;

    switch (option.type) {
      case "text":
        value = req.body[id] ?? option.default;
        break;
      case "number":
        value = req.body[id] ?? option.default;
        break;
      case "checkbox":
        value = req.body.hasOwnProperty(id) ? "true" : "false";
        break;
      case "select":
        value = req.body[id] ?? option.default;

        const choices = option.choices.map((choice) => choice.value);

        if (!choices.includes(value)) {
          value = option.default;
        }
    }

    res.cookie(id, value, cookieOptions);
  });

  res.redirect("/");
});

/* router.get("/set", async (req, res) => {
  const cookieOptions = {
    httpOnly: false,
    secure: false,
    sameSite: "lax",
    expires: new Date("Tue, 19 Jan 2038 03:14:07 GMT"),
  };

  Object.entries(options).forEach(([id, option]) => {
    var value;

    switch (option.type) {
      case "text":
        value = req.query[id] ?? option.default;
        break;
      case "number":
        value = req.query[id] ?? option.default;
        break;
      case "checkbox":
        value = req.query[id] ? "true" : "false";
        break;
      case "select":
        value = req.query[id] ?? option.default;

        const choices = option.choices.map((choice) => choice.value);

        if (!choices.includes(value)) {
          value = option.default;
        }
    }

    res.cookie(id, value, cookieOptions);
  });

  res.redirect("/");
});*/

module.exports = router;
