const fs = require('fs');
const path = require('path');

const deleteFile = (dir, file) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(dir, file);

    fs.lstat(filePath, (err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.isDirectory()) {
        resolve(removeDir(filePath));
      } else {
        fs.unlink(filePath, (err) => {
          if (err) {
            return reject(err);
          }
          resolve();
        });
      }
    });
  });
};

const removeDir = (name) => {
  return new Promise((resolve, reject) => {
    fs.access(name, (err) => {
      if (err) {
        return reject(err);
      }
      fs.readdir(name, (err, files) => {
        if (err) {
          return reject(err);
        }
        Promise.all(files.map(file => deleteFile(name, file)))
          .then(() => {
            fs.rmdir(name, (err) => {
              if (err) {
                return reject(err);
              }
              resolve(name);
            });
          })
          .catch(reject);
      });
    });
  });
};

module.exports = removeDir;
