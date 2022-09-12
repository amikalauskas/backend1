const path = require('path');
const fs = require('fs');

const fileNames = ['pirmas.txt', 'antras.json', 'trecias.csv'];

fileNames.forEach((fileName) => {
  const filepath = path.join(__dirname, __filename);
  fs.writeFile(filepath, 'testas', err);
  if (err) {
    console.error(err);
  }
});

console.log(__dirname);
console.log(__filename);
