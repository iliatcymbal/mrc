const fs = require('fs-extra');

const createFile = (name = 'index.js', body = '') => {
  fs.writeFile(name, body, (err) => {
    if (err) throw err;
    console.log(`The file "${name}" was created`);
  });
};

const createDir = (name = 'Main', callback) => {
  fs.ensureDir(name, (err) => {

    if (err) throw err;

    console.log(`The dir "${name}" was created`);

    if (callback) {
      callback(name);
    }
  });

};

module.exports = { createFile, createDir };
