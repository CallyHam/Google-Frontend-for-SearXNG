const { languages } = require("./languages");

const groups = {
  layout: {
    name: "Layout",
    options: ["layout"],
  },
  cosmetic: {
    name: "Cosmetic",
    options: ["copyright", "total"],
  },
  searxng: {
    name: "SearXNG",
    options: ["instance", "web_engines", "image_engines"],
  },
  search: {
    name: "Search Settings",
    options: ["language", "results_tab"],
  },
  safesearch: {
    name: "SafeSearch",
    options: ["safesearch"],
  },
};

const options = {
  layout: {
    type: "select",
    name: "Layout",
    summary: "Layout to use for page rendering",
    default: "basic",
    choices: [
      {
        value: "basic",
        name: "Basic",
      },
      {
        value: "1999",
        name: "1999",
      },
      {
        value: "2000",
        name: "2000",
      },
      {
        value: "2001",
        name: "2001",
      },
      {
        value: "2002",
        name: "2002",
      },
      {
        value: "2004",
        name: "2004",
      },
      {
        value: "2006",
        name: "2006",
      },
      {
        value: "2007",
        name: "2007",
      },
    ],
  },
  copyright: {
    type: "number",
    name: "Copyright Year",
    summary: "Copyright year to display",
    min: 0,
    max: 9999,
    default: new Date().getFullYear(),
  },
  total: {
    type: "number",
    name: "Total Pages",
    summary: "Number of web pages to display",
    min: 0,
    max: Infinity,
    default: 0,
    layouts: ["basic"],
  },
  instance: {
    type: "text",
    name: "SearXNG Instance",
    summary: "Instance to query for search results",
    maxlength: 2048,
    default: "",
  },
  web_engines: {
    type: "text",
    name: "Web Engines",
    summary: "Engines that will provide web results",
    maxlength: 2048,
    default: "google",
  },
  image_engines: {
    type: "text",
    name: "Image Engines",
    summary: "Engines that will provide image results",
    maxlength: 2048,
    default: "google_images",
  },
  language: {
    type: "select",
    name: "Language",
    summary: "Prefer pages written in this language",
    default: "auto",
    choices: languages,
  },
  results_tab: {
    type: "checkbox",
    name: "Results Tab",
    summary: "Open a new tab for search results",
    default: "false",
  },
  safesearch: {
    type: "select",
    name: "SafeSearch",
    summary: "SafeSearch filter level",
    default: "0",
    choices: [
      {
        value: "0",
        name: "None",
      },
      {
        value: "1",
        name: "Moderate",
      },
      {
        value: "2",
        name: "Strict",
      },
    ],
  },
};

module.exports = { groups, options };
