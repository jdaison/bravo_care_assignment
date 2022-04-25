const controller = require('../controllers/hospital.controller');

module.exports = (app) => {
  app.get('/hospitals', controller.getAllHospitals);
  app.get('/hospitals/:id', controller.getHospitalById);
  app.put('/hospitals/:id', controller.updateHospitalById);
  app.post('/hospitals', controller.createHospital);
};
