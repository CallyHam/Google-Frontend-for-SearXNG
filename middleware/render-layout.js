const fs = require("fs");
const path = require("path");

const { options } = require("../models/preferences");

function renderLayout(req, res, next) {
  res.renderLayout = (page, locals = {}) => {
    const layout = res.locals.preferences.layout;
    const path = `pages/${layout}/${page}`;
    const exists = fs.existsSync(`./views/${path}.ejs`);

    if (exists) {
      return res.render(path, locals);
    } else {
      var layouts = [...options.layout.choices].reverse();
      const index = layouts.findIndex((choice) => choice.value === layout);

      layouts = layouts.slice(index + 1);

      for (const choice of layouts) {
        const path = `pages/${choice.value}/${page}`;
        const exists = fs.existsSync(`./views/${path}.ejs`);

        if (exists) {
          return res.render(path, locals);
        }
      }
    }
  };

  next();
}

function renderLayout(req, res, next) {
  res.renderLayout = (page, locals = {}) => {
    const preferred = res.locals.preferences.layout;
    var layouts = [...options.layout.choices.map((choice) => choice.value).reverse()];
    layouts = layouts.slice(layouts.indexOf(preferred));

    for (const layout of layouts) {
      const view = `pages/${layout}/${page}`;
      const file = path.join(__dirname, "../views", `${view}.ejs`);
      const exists = fs.existsSync(file);

      if (!exists) {
        continue;
      }

      return res.render(view, locals, (error, html) => {
        if (error) {
          if (process.env.NODE_ENV === "prod") {
            error.status = 500;
            error.statusText = "Internal Server Error";
            error.message = "An internal server error has occurred.";
          }
          return next(error);
        }
        return res.send(html);
      });
    }

    const error = new Error();
    error.status = 404;
    error.statusText = "Not Found";
    error.message = req.originalUrl;
    next(error);
  };

  next();
}

module.exports = renderLayout;
