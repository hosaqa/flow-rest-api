const getAbsolutePath = (host, relativePath) => {
  if (!relativePath.match(host)) {
    return `${host}${relativePath}`;
  } else {
    return relativePath;
  }
};

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

module.exports = {
  getAbsolutePath: getAbsolutePath,
  capitalize
};
