require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));

require('./routes')(app);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Bravocare API listening on port ${port}`);
  });
}

module.exports = app;
