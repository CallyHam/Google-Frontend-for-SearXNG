function highlight(source, query) {
  const targets = query.split(/[^a-zA-Z0-9]+/);

  const escapedTargets = targets.map((target) => target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escapedTargets.join("|")})`, "gi");

  return source.replace(regex, (match) => `<b>${match}</b>`);
}

module.exports = { highlight };
