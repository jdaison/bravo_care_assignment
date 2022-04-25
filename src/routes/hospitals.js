const controller = require('../controllers/hospital.controller');

module.exports = (app) => {
  app.get('/hospitals', controller.getAllHospitals);
  app.post('/hospitals', controller.createHospital);
};
