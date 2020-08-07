# node-google-tts
Simple node.js library for google text to speech

## Installation
```cmd
npm i node-google-tts 
```

## Usage

```js
const googleTTS = require('google-tts');
const tts = new googleTTS();

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
  
  let files = [];
  for (let i = 0; i < arr.length; i++) {
    let name = `./audio${i}.mp3`;
    
    fs.writeFileSync(name, arr[i]);
    files.push(name);
  }
  
  // Concat audio files
  tts.concat(files, "out.mp3"); 
});
```

## Supported languages
Google tts supports the following language codes:<br>
https://github.com/IldarSham/node-google-tts/blob/master/supported-languages.txt
