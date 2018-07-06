const helpers = require('./../lib/helpers');

module.exports = (name, path) => {
  const componentClassName = helpers.vengerToCamelCase(path);

  return `import { Component } from 'react';
import './${componentClassName.toLowerCase()}.scss';
  
export class ${componentClassName} extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>${componentClassName}</span>
    );
  }
}`;
};
