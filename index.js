#! /usr/bin/env node

const argv = require('yargs').argv;
const create = require('./createFile');
const files = require('./files');
const body = require('./createBody');
const helpers = require('./lib/helpers');

const mainName = argv['name'] || 'NewComponent';
const prefix = argv['prf'];
const postfix = argv['postfix'];
const div = argv['div'];
const initialName = helpers.getInitialName({ mainName, prefix, postfix });

create.createDir(initialName, (path) => {
  files.forEach((file) => {
    const baseName = `${file.name || mainName}`;
    const name = file.name !== 'index' ?
      helpers.getFullName({ name: baseName, postfix, prefix, div }) : 'index';
    const commonName = helpers.getFullName({ name: mainName, postfix, prefix, div });
    const ext = file.ext || 'js';

    Object.assign(file, { postfix, prefix, name });

    create.createFile(`${path}/${name}.${ext}`, body(file, path, commonName));
  });
});

module.exports = create.createDir;


