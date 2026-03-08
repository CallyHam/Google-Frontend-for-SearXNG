require("dotenv").config({ quiet: true });

const express = require("express");
const cookieParser = require("cookie-parser");

const cleanQuery = require("./middleware/clean-query");
const setPreferences = require("./middleware/set-preferences");
const renderLayout = require("./middleware/render-layout");
const utils = require("./middleware/utils");
const errorHandler = require("./middleware/error-handler");

const server = express();
const port = process.env.SERVER_PORT || 3000;

server.set("view engine", "ejs");

server.use("/static", express.static("static"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.use(cleanQuery);
server.use(setPreferences);
server.use(renderLayout);
server.use(utils);

const routes = require("./routes/all");

server.use("/", routes);

server.use(errorHandler);

server.listen(port, () => {
  console.info(`Server is now listening on port ${port}`);
});
