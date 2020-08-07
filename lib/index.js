const request = require('./request');
const text_wrap = require('./text-wrap');

const tts_length_limit = 200;

class googleTTS {
  async get({text, lang, limit_bypass}) {
    let result = [];

    let arr = [];
    if (text.length > tts_length_limit) {
      if (limit_bypass) {
        arr = text_wrap(text, tts_length_limit); 
      } else {
        throw new Error('Text length exceeds ' + tts_length_limit + ' characters. Use limit bypass.');
      }
    } else {
      arr.push(text);
    }
  
    for (let value of arr) {
      result.push(await request({    
        client: 'it',
        tl: lang || 'ru',
        q: value, 
        ie: 'UTF-8'
      }));
    }
  
    return (result.length > 1 ? result : result[0]);
  }

  concat(arr) {
    return Buffer.concat(arr);
  }
}

module.exports = googleTTS;
