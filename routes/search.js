const express = require("express");
const router = express.Router();

const { fetchSearchResults } = require("../helpers/search");

router.get("/", async (req, res, next) => {
  try {
    if (!req.cleanQuery.q) {
      return res.redirect("/");
    }

    const search = await fetchSearchResults(req.cleanQuery, res.locals.preferences, req.get("Accept-Language"));

    if (search.results.length && search.template == "search" && req.cleanQuery.lucky) {
      return res.redirect(search.results[0].url);
    }

    return res.renderLayout(search.template, {
      query: req.cleanQuery,
      search: search,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
