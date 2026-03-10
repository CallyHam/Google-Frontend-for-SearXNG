const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { style } = req.cookies;

  res.renderLayout("advanced-search", { cookies: req.cookies });
});

router.get("/v1", async (req, res, next) => {
  const { as_q, as_qt, as_eq, as_eqt, sitesearch, as_dt, as_rq } = req.cleanQuery;

  var queryString = "";

  if (as_q) {
    if (as_qt === "w") {
      queryString = `${queryString} ${as_q}`;
    } else if (as_qt === "p") {
      queryString = `${queryString} "${as_q}"`;
    }
  }

  if (as_eq) {
    if (as_eqt === "w") {
      const string = as_eq.trim().replaceAll(" ", " -");
      queryString = `${queryString} -${string}`;
    } else if (as_eqt === "p") {
      queryString = `${queryString} -"${as_eq}"`;
    }
  }

  if (sitesearch) {
    if (as_dt === "i") {
      queryString = `${queryString} site:${sitesearch}`;
    } else if (as_dt === "e") {
      queryString = `${queryString} -site:${sitesearch}`;
    }
  }

  if (as_rq) {
    queryString = `related:${as_rq}`;
  }

  return res.redirect("/search?q=" + queryString);
});

router.get("/v2", async (req, res, next) => {
  const { as_q, as_epq, as_oq, as_eq, as_occt, as_dt, as_sitesearch, as_ft, as_filetype, as_rq } = req.cleanQuery;

  var queryString = "";

  if (as_q) {
    queryString = `${queryString} ${as_q}`;
  }
  if (as_oq) {
    const string = as_oq.trim().replaceAll(" ", " OR ");
    queryString = `${queryString} ${string}`;
  }
  if (as_epq) {
    queryString = `${queryString} "${as_epq}"`;
  }
  if (as_eq) {
    const string = as_eq.trim().replaceAll(" ", " -");
    queryString = `${queryString} -${string}`;
  }
  if (as_sitesearch) {
    if (as_dt === "i") {
      queryString = `${queryString} site:${as_sitesearch}`;
    } else if (as_dt === "e") {
      queryString = `${queryString} -site:${as_sitesearch}`;
    }
  }
  if (as_filetype) {
    if (as_ft === "i") {
      queryString = `${queryString} filetype:${as_filetype}`;
    } else if (as_ft === "e") {
      queryString = `${queryString} -filetype:${as_filetype}`;
    }
  }

  if (as_occt) {
    switch (as_occt) {
      case "title":
        queryString = `allintitle: ${queryString}`;
        break;
      case "body":
        queryString = `allintext: ${queryString}`;
        break;
      case "url":
        queryString = `allinurl: ${queryString}`;
        break;
      case "links":
        queryString = `allinanchor: ${queryString}`;
        break;
      default:
        break;
    }
  }

  if (as_rq) {
    queryString = `related:${as_rq}`;
  }

  return res.redirect("/search?q=" + queryString);
});

router.get("/v3", async (req, res, next) => {
  const { as_q, as_epq, as_oq0, as_oq1, as_oq2, as_eq, as_filetype, as_sitesearch, as_occt, as_nlo, as_nhi, as_rq } = req.cleanQuery;

  var as_oq = [as_oq0, as_oq1, as_oq2];

  for (var i = as_oq.length; i >= 0; i--) {
    if (!as_oq[i]) as_oq.splice(i, 1);
    console.log(as_oq);
  }

  as_oq = as_oq.join(" OR ");

  var queryString = "";

  if (as_q) {
    queryString = `${queryString} ${as_q}`;
  }
  if (as_epq) {
    queryString = `${queryString} "${as_epq}"`;
  }
  if (as_oq) {
    queryString = `${queryString} ${as_oq}`;
  }
  if (as_eq) {
    const string = as_eq.trim().replaceAll(" ", " -");
    queryString = `${queryString} -${string}`;
  }
  if (as_sitesearch) {
    queryString = `${queryString} site:${as_sitesearch}`;
  }
  if (as_filetype) {
    queryString = `${queryString} filetype:${as_filetype}`;
  }
  if (as_nlo && as_nhi) {
    queryString = `${queryString} ${as_nlo}..${as_nhi}`;
  }

  if (as_occt) {
    switch (as_occt) {
      case "title":
        queryString = `allintitle: ${queryString}`;
        break;
      case "body":
        queryString = `allintext: ${queryString}`;
        break;
      case "url":
        queryString = `allinurl: ${queryString}`;
        break;
      case "links":
        queryString = `allinanchor: ${queryString}`;
        break;
      default:
        break;
    }
  }

  if (as_rq) {
    queryString = `related:${as_rq}`;
  }

  return res.redirect("/search?q=" + queryString);
});

module.exports = router;
