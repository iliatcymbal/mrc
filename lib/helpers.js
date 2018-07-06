const vengerToCamelCase = (string) => (
  string.split('-').map((match) => (
    match[0].toUpperCase() + match.slice(1)
  )).join('')
);

const firstToLowerCase = string => string[0].toLowerCase() + string.slice(1);

const getInitialName = ({ mainName, prefix, postfix}) => {
  const up = str => `${str[0].toUpperCase()}${str.slice(1)}`;

  if (prefix) {
    mainName = `${up(prefix)}${up(mainName)}`;
  }

  if (postfix) {
    mainName += up(postfix);
  }

  mainName = mainName.replace(/\W+/g, '');

  return mainName;
};

const getFullName = ({name, prefix, postfix, div}) =>
  [prefix || '', name , postfix || '']
    .filter(el => !!el).join(div || '.');

module.exports = {
  vengerToCamelCase,
  getInitialName,
  getFullName,
  firstToLowerCase
};
