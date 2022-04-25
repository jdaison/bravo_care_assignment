const reportController = require('../controllers/report');

module.exports = (app) => {
  app.get('/report/hospital/:id', reportController.getAllNurses);
};
