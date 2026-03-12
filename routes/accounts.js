const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  if (req.cookies.email) {
    return res.redirect("/accounts");
  }

  return res.renderLayout("login");
});

router.get("/logout", (req, res) => {
  res.clearCookie("email");

  return res.redirect("/");
});

router.post("/auth", (req, res) => {
  const cookieOptions = {
    httpOnly: false,
    secure: false,
    sameSite: "lax",
    expires: new Date("Tue, 19 Jan 2038 03:14:07 GMT")
  };

  if (!req.body["remember"]) {
    delete cookieOptions.expires;
  }

  res.cookie("email", req.body["email"], cookieOptions);

  return res.redirect("/");
});

module.exports = router;
