const fs = require('fs');

module.exports = async (files, output) => {
  const writeStream = fs.createWriteStream(output);
  
  for (const value of files) {
    const readStream = fs.createReadStream(value);

    await new Promise(resolve => {
      readStream.pipe(writeStream, { end: false });
      readStream.on('end', resolve);
    });
  }
}