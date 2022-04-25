const loginController = require('../controllers/login');

module.exports = (app) => {
  app.post('/login', loginController.signInApp);
};
