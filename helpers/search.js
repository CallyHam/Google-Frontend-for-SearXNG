const cache = new Map();
const ttl = 10 * 60 * 1000; // 10 Minutes

async function fetchSearchResults(query, preferences, locale) {
  const startTime = Date.now();

  var { q, page = 1, category = "general" } = query;
  const { instance, web_engines, image_engines, language, safesearch } = preferences;

  const categoryEngines = {
    general: web_engines,
    images: image_engines,
  };

  const engines = (categoryEngines[category] || web_engines).split(",");

  const path = `/search?q=${encodeURIComponent(q)}&page=${page}&engines=${engines}&categories=${category}&language=${language}&safesearch=${safesearch}&format=json`;
  const route = instance + path;

  if (cache.has(route)) {
    const { results, expiry } = cache.get(route);
    if (startTime < expiry) {
      return results;
    } else {
      cache.delete(route);
    }
  }

  const config = await fetch(`${instance}/config`).then((response) => response.json());

  const enabledEngines = config.engines.filter((engine) => engine.categories.includes(category)).filter((engine) => engines.includes(engine.name));
  const disabledEngines = config.engines.filter((engine) => engine.categories.includes(category)).filter((engine) => !enabledEngines.includes(engine));

  const enabledEnginesString = enabledEngines.map((engine) => `${engine.name}__${category}`).join(",");
  const disabledEnginesString = disabledEngines.map((engine) => `${engine.name}__${category}`).join(",");

  const search = await fetch(route, {
    headers: {
      "Accept-Language": locale,
      Cookie: `enabled_engines=${enabledEnginesString}; disabled_engines=${disabledEnginesString}`,
    },
  }).then((response) => response.json());

  const endTime = Date.now();

  var template;

  switch (category) {
    case "general":
      template = "search";
      break;
    case "images":
      template = "search-img";
      break;
    default:
      template = "search";
      break;
  }

  const currentPage = parseInt(page, 10);
  const pageSize = search.results.length;
  const resultCount = pageSize * currentPage;
  const totalResultCount = Math.max(search.number_of_results, resultCount);
  const pageStart = resultCount ? resultCount - pageSize + 1 : 0;
  const responseTime = parseFloat(((endTime - startTime) / 1000).toFixed(2));

  const results = {
    category: category,
    page_start: pageStart,
    current_page: currentPage,
    result_count: resultCount,
    total_result_count: totalResultCount,
    response_time: responseTime,
    template: template,
    results: [],
    suggestions: search.suggestions,
  };

  for (const item of search.results) {
    const parsedUrl = new URL(item.url);

    if (category === "images" && item.template !== "images.html") continue;

    const result = {
      title: item.title ? item.title : "Untitled",
      url: item.url,
      image: item.img_src,
      thumbnail: item.thumbnail_src,
      parsed_url: {
        protocol: parsedUrl.protocol,
        host: parsedUrl.hostname,
        path: parsedUrl.pathname,
      },
      content: item.content ? item.content : "No information is available for this page.",
    };

    results.results.push(result);
  }

  cache.set(route, { results, expiry: startTime + ttl });
  return results;
}

module.exports = { fetchSearchResults };
