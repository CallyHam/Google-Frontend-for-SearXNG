const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.renderLayout("home");
});

router.get("/imghp", (req, res) => {
  res.renderLayout("home-img");
});

module.exports = router;
