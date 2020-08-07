# node-google-tts
Simple library for google text to speech

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
Google tts supports the following language codes:

af - Afrikaans
sq - Albanian
am - Amharic
ar - Arabic
hy - Armenian
az - Azerbaijani
eu - Basque
be - Belarusian
bn - Bengali
bh - Bihari
bs - Bosnian
br - Breton
bg - Bulgarian
km - Cambodian
ca - Catalan
zh-CN - Chinese (Simplified)
zh-TW - Chinese (Traditional)
co - Corsican
hr - Croatian
cs - Czech
da - Danish
nl - Dutch
en - English
eo - Esperanto
et - Estonian
fo - Faroese
tl - Filipino
fi - Finnish
fr - French
fy - Frisian
gl - Galician
ka - Georgian
de - German
el - Greek
gn - Guarani
gu - Gujarati
ha - Hausa
iw - Hebrew
hi - Hindi
hu - Hungarian
is - Icelandic
id - Indonesian
ia - Interlingua
ga - Irish
it - Italian
ja - Japanese
jw - Javanese
kn - Kannada
kk - Kazakh
rw - Kinyarwanda
rn - Kirundi
ko - Korean
ku - Kurdish
ky - Kyrgyz
lo - Laothian
la - Latin
lv - Latvian
ln - Lingala
lt - Lithuanian
mk - Macedonian
mg - Malagasy
ms - Malay
ml - Malayalam
mt - Maltese
mi - Maori
mr - Marathi
mo - Moldavian
mn - Mongolian
sr-ME - Montenegrin
ne - Nepali
no - Norwegian
nn - Norwegian (Nynorsk)
oc - Occitan
or - Oriya
om - Oromo
ps - Pashto
fa - Persian
pl - Polish
pt-BR - Portuguese (Brazil)
pt-PT - Portuguese (Portugal)
pa - Punjabi
qu - Quechua
ro - Romanian
rm - Romansh
ru - Russian
gd - Scots Gaelic
sr - Serbian
sh - Serbo-Croatian
st - Sesotho
sn - Shona
sd - Sindhi
si - Sinhalese
sk - Slovak
sl - Slovenian
so - Somali
es - Spanish
su - Sundanese
sw - Swahili
sv - Swedish
tg - Tajik
ta - Tamil
tt - Tatar
te - Telugu
th - Thai
ti - Tigrinya
to - Tonga
tr - Turkish
tk - Turkmen
tw - Twi
ug - Uighur
uk - Ukrainian
ur - Urdu
uz - Uzbek
vi - Vietnamese
cy - Welsh
xh - Xhosa
yi - Yiddish
yo - Yoruba
zu - Zulu 
