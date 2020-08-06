module.exports = (str, max) => {
  let words = str.split(/\s+/);
  
  let arr = [""];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      arr.splice(i, 1, ...limit_split(words[i], max));
      continue;
    }

    let word = (arr[arr.length - 1].length ? " " : "")  + words[i];
    if (arr[arr.length - 1].length + word.length <= max) {
      arr[arr.length - 1] += word;
    } else {
      arr.push(words[i]);
    }
  }

  return arr;
};

function limit_split(str, max) {
  let arr = [];

  for (let i = 0; i < str.length; i += max) {
    arr.push(str.slice(i, i + max));
  }

  return arr;
} 