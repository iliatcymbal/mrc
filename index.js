#! /usr/bin/env node

const argv = require('yargs').argv;
const create = require('./createFile');
const files = require('./files');
const body = require('./createBody');
const helpers = require('./lib/helpers');

const [firstArg] = argv._;
const mainName = argv['name'] || firstArg || 'NewComponent';
const prefix = argv['prf'];
const postfix = argv['postfix'];
const pure = argv['pure'];
const div = argv['div'];
const initialName = helpers.getInitialName({ mainName, prefix, postfix });

console.log(argv);
create.createDir(initialName)
  .then((path) => {
    files.forEach((file) => {
      const title = file.name || mainName;
      const baseName = (file.ext || '').includes('css') ? helpers.firstToLowerCase(title) : title;
      const ext = file.ext || 'js';
      const name = file.name !== 'index' ?
        helpers.getFullName({ name: baseName, postfix, prefix, div, ext }) : 'index';
      const commonName = helpers.getFullName({ name: mainName, postfix, prefix, div });

      Object.assign(file, { postfix, prefix, name });

      create.createFile(`${path}/${name}.${ext}`, body(file, path, commonName, pure));
    });
  });

module.exports = create.createDir;


