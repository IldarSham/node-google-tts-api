# node-google-tts-api
Simple node.js library for google text to speech service

## Installation
```cmd
npm i node-google-tts-api 
```

## Usage

```js
const googleTTS = require('node-google-tts-api');
const tts = new googleTTS();

const fs = require('fs');

tts.get({
  text: "hello world",
  lang: "en"
}).then(data => {
  // returns mp3 audio src buffer
  fs.writeFileSync("./audio.mp3", data);
});
```

### Text length limit 
Google forbids sending text over 200 characters - which is not very cool. Therefore, a bypass was made:

```js
tts.get({
  text: "a".repeat(200) + "b".repeat(50),
  lang: "en",
  limit_bypass: true // required parameter
}).then(arr => {
  // returns array with mp3 audio src buffers
  let data = tts.concat(arr); // concat audio files
  fs.writeFileSync("./audio.mp3", data);
});
```

## Supported languages
Google text to speech service supports the following language codes:<br>
https://github.com/IldarSham/node-google-tts/blob/master/supported-languages.txt
