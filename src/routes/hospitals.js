const controller = require('../controllers/hospital.controller');

module.exports = (app) => {
  app.get('/hospitals', controller.getAllHospitals);
  app.get('/hospitals/:id', controller.getHospitalById);
  app.post('/hospitals', controller.createHospital);
};
