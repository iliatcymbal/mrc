const component = require('./types/component');
const style = require('./types/style');
const html = require('./types/html');
const main = require('./types/main');

module.exports = (file, path, name) => {
  if (file.name === 'index') {
    return main(name);
  }

  if (file.ext === 'js' && file.type === 'component') {
    return component(file.name, path);
  }

  if (/less|sass|css/.test(file.ext)) {
    return style(path);
  }

  if (file.ext === 'html') {
    return html(name);
  }

  return '';
};
