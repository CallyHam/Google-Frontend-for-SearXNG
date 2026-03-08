const express = require("express");
const router = express.Router();

router.use("/", require("./home"));
router.use("/search", require("./search"));
router.use("/advanced_search", require("./advanced-search"));
router.use("/preferences", require("./preferences"));
router.use("/accounts", require("./accounts"));

router.use(require("./nonexistent"));

module.exports = router;
