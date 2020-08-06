const needle = require('needle');
const querystring = require('querystring');

const host = "https://translate.google.com";

module.exports = async (params) => {
  const options = {
    headers: { 'User-Agent': 'GoogleTranslate/5.26.59113 (iPhone; iOS 12.1; ru; iPhone9,3)' }
  }

  const r = await needle(host + "/translate_tts?" + querystring.stringify(params), options);
  if (r.statusCode === 200) {
    return r.raw;
  } else {
    throw new Error("request error: " + r.statusCode);
  }
}