const userController = require('../controllers/user');

module.exports = (app) => {
  app.get('/users', userController.getAllUsers);
  app.post('/users', userController.createUser);
};
