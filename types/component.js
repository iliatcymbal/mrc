const helpers = require('./../lib/helpers');

const classComponent = (name) => `import { Component } from 'react';
import './${name.toLowerCase()}.scss';
  
export class ${name} extends Component {
  state = {}
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>${name}</span>
    );
  }
}`;

const pureComponent = (name) => `import { Component } from 'react';
import './${name.toLowerCase()}.scss';
  
export const ${name} = (props) => {
  return (
      <span>${name}</span>
    );
};`;

module.exports = (name, path, isPure) => {
  const componentClassName = helpers.vengerToCamelCase(path);

  return (isPure ? pureComponent : classComponent)(componentClassName);
};
