const getAbsolutePath = (host, relativePath) => {
  if (!relativePath.match(host)) {
    return `${host}${relativePath}`;
  } else {
    return relativePath;
  }
};

module.exports = {
  getAbsolutePath: getAbsolutePath
};
