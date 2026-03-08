const languages = [
  {
    value: "all",
    name: "Any language",
  },
  {
    value: "auto",
    name: "Auto-detect",
  },
  {
    value: "af",
    name: "Afrikaans",
  },
  {
    value: "ca",
    name: "Català",
  },
  {
    value: "cy",
    name: "Cymraeg",
  },
  {
    value: "da",
    name: "Dansk",
  },
  {
    value: "da-DK",
    name: "Dansk (Danmark)",
  },
  {
    value: "de",
    name: "Deutsch",
  },
  {
    value: "de-AT",
    name: "Deutsch (Österreich)",
  },
  {
    value: "de-BE",
    name: "Deutsch (Belgien)",
  },
  {
    value: "de-CH",
    name: "Deutsch (Schweiz)",
  },
  {
    value: "de-DE",
    name: "Deutsch (Deutschland)",
  },
  {
    value: "et",
    name: "Eesti",
  },
  {
    value: "et-EE",
    name: "Eesti (Eesti)",
  },
  {
    value: "en",
    name: "English",
  },
  {
    value: "en-AU",
    name: "English (Australia)",
  },
  {
    value: "en-CA",
    name: "English (Canada)",
  },
  {
    value: "en-GB",
    name: "English (United Kingdom)",
  },
  {
    value: "en-IE",
    name: "English (Ireland)",
  },
  {
    value: "en-IN",
    name: "English (India)",
  },
  {
    value: "en-NZ",
    name: "English (New Zealand)",
  },
  {
    value: "en-PH",
    name: "English (Philippines)",
  },
  {
    value: "en-PK",
    name: "English (Pakistan)",
  },
  {
    value: "en-SG",
    name: "English (Singapore)",
  },
  {
    value: "en-US",
    name: "English (United States)",
  },
  {
    value: "en-ZA",
    name: "English (South Africa)",
  },
  {
    value: "es",
    name: "Español",
  },
  {
    value: "es-AR",
    name: "Español (Argentina)",
  },
  {
    value: "es-CL",
    name: "Español (Chile)",
  },
  {
    value: "es-CO",
    name: "Español (Colombia)",
  },
  {
    value: "es-ES",
    name: "Español (España)",
  },
  {
    value: "es-MX",
    name: "Español (México)",
  },
  {
    value: "es-PE",
    name: "Español (Perú)",
  },
  {
    value: "eu",
    name: "Euskara",
  },
  {
    value: "fr",
    name: "Français",
  },
  {
    value: "fr-BE",
    name: "Français (Belgique)",
  },
  {
    value: "fr-CA",
    name: "Français (Canada)",
  },
  {
    value: "fr-CH",
    name: "Français (Suisse)",
  },
  {
    value: "fr-FR",
    name: "Français (France)",
  },
  {
    value: "ga",
    name: "Gaeilge",
  },
  {
    value: "gl",
    name: "Galego",
  },
  {
    value: "gd",
    name: "Gàidhlig",
  },
  {
    value: "hr",
    name: "Hrvatski",
  },
  {
    value: "id",
    name: "Indonesia",
  },
  {
    value: "id-ID",
    name: "Indonesia (Indonesia)",
  },
  {
    value: "it",
    name: "Italiano",
  },
  {
    value: "it-CH",
    name: "Italiano (Svizzera)",
  },
  {
    value: "it-IT",
    name: "Italiano (Italia)",
  },
  {
    value: "lv",
    name: "Latviešu",
  },
  {
    value: "lt",
    name: "Lietuvių",
  },
  {
    value: "hu",
    name: "Magyar",
  },
  {
    value: "hu-HU",
    name: "Magyar (Magyarország)",
  },
  {
    value: "nl",
    name: "Nederlands",
  },
  {
    value: "nl-BE",
    name: "Nederlands (België)",
  },
  {
    value: "nl-NL",
    name: "Nederlands (Nederland)",
  },
  {
    value: "nb",
    name: "Norsk Bokmål",
  },
  {
    value: "nb-NO",
    name: "Norsk Bokmål (Norge)",
  },
  {
    value: "pl",
    name: "Polski",
  },
  {
    value: "pl-PL",
    name: "Polski (Polska)",
  },
  {
    value: "pt",
    name: "Português",
  },
  {
    value: "pt-BR",
    name: "Português (Brasil)",
  },
  {
    value: "pt-PT",
    name: "Português (Portugal)",
  },
  {
    value: "ro",
    name: "Română",
  },
  {
    value: "ro-RO",
    name: "Română (România)",
  },
  {
    value: "sq",
    name: "Shqip",
  },
  {
    value: "sk",
    name: "Slovenčina",
  },
  {
    value: "sl",
    name: "Slovenščina",
  },
  {
    value: "fi",
    name: "Suomi",
  },
  {
    value: "fi-FI",
    name: "Suomi (Suomi)",
  },
  {
    value: "sv",
    name: "Svenska",
  },
  {
    value: "sv-SE",
    name: "Svenska (Sverige)",
  },
  {
    value: "vi",
    name: "Tiếng Việt",
  },
  {
    value: "vi-VN",
    name: "Tiếng Việt (Việt Nam)",
  },
  {
    value: "tr",
    name: "Türkçe",
  },
  {
    value: "tr-TR",
    name: "Türkçe (Türkiye)",
  },
  {
    value: "is",
    name: "Íslenska",
  },
  {
    value: "cs",
    name: "Čeština",
  },
  {
    value: "cs-CZ",
    name: "Čeština (Česko)",
  },
  {
    value: "el",
    name: "Ελληνικά",
  },
  {
    value: "el-GR",
    name: "Ελληνικά (Ελλάδα)",
  },
  {
    value: "be",
    name: "Беларуская",
  },
  {
    value: "bg",
    name: "Български",
  },
  {
    value: "bg-BG",
    name: "Български (България)",
  },
  {
    value: "ru",
    name: "Русский",
  },
  {
    value: "ru-RU",
    name: "Русский (Россия)",
  },
  {
    value: "uk",
    name: "Українська",
  },
  {
    value: "he",
    name: "עברית",
  },
  {
    value: "ur",
    name: "اردو",
  },
  {
    value: "ar",
    name: "العربية",
  },
  {
    value: "ar-SA",
    name: "العربية (المملكة العربية السعودية)",
  },
  {
    value: "fa",
    name: "فارسی",
  },
  {
    value: "mr",
    name: "मराठी",
  },
  {
    value: "hi",
    name: "हिन्दी",
  },
  {
    value: "ta",
    name: "தமிழ்",
  },
  {
    value: "te",
    name: "తెలుగు",
  },
  {
    value: "kn",
    name: "ಕನ್ನಡ",
  },
  {
    value: "ml",
    name: "മലയാളം",
  },
  {
    value: "th",
    name: "ไทย",
  },
  {
    value: "th-TH",
    name: "ไทย (ไทย)",
  },
  {
    value: "zh",
    name: "中文",
  },
  {
    value: "zh-CN",
    name: "中文 (中国)",
  },
  {
    value: "zh-HK",
    name: "中文 (中國香港特別行政區)",
  },
  {
    value: "zh-TW",
    name: "中文 (台灣)",
  },
  {
    value: "ja",
    name: "日本語",
  },
  {
    value: "ja-JP",
    name: "日本語 (日本)",
  },
  {
    value: "ko",
    name: "한국어",
  },
  {
    value: "ko-KR",
    name: "한국어 (대한민국)",
  },
];

module.exports = { languages };
