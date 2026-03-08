function cleanQuery(req, res, next) {
  const cleaned = {};

  for (const [key, value] of Object.entries(req.query)) {
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed) {
        cleaned[key] = trimmed;
      }
    }
  }

  req.cleanQuery = cleaned;

  next();
}

module.exports = cleanQuery;
