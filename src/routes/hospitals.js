const hospitalController = require('../controllers/hospital');

module.exports = (app) => {
  app.get('/hospitals', hospitalController.getAllHospitals);
  app.get('/hospitals/:id', hospitalController.getHospitalById);
  app.put('/hospitals/:id', hospitalController.updateHospitalById);
  app.post('/hospitals', hospitalController.createHospital);
  app.delete('/hospitals/:id', hospitalController.deleteHospital);
};
