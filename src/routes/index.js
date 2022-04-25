const path = require('path');
const glob = require('glob');

module.exports = (app) => {
  glob
    .sync('./src/routes/**/*.js', {
      ignore: ['./src/routes/**/index.js', './src/routes/**/**.test.js'],
    })
    .forEach((file) => {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      require(path.resolve(file))(app);
    });
};
