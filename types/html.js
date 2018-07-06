module.exports = (path) => {
  const tag = path.toLowerCase().replace(/\W+/g, '-');

  return `<${tag}></${tag}>`;
};
