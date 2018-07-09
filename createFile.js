const fs = require('fs');
const removeDir = require('./lib/removeDir');

const createFile = (name = 'index.js', body = '') => {
  fs.writeFile(name, body, (err) => {
    if (err) throw err;
    console.log(`The file "${name}" was created`);
  });
};

const mkdir = (name) => new Promise((resolve, reject) => {
  fs.mkdir(name, (err) => {
    if (err) {
      reject(err);
    }

    console.log(`The dir "${name}" was created`);

    resolve(name);
  });
});

const createDir = (name = 'Main') => mkdir(name)
  .catch((error) => {
    if (error.code === 'EEXIST') {
      return removeDir(name)
        .then(createDir);
    }

    throw error;
  });

module.exports = { createFile, createDir };
