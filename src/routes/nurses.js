const nurseController = require('../controllers/nurse');

module.exports = (app) => {
  app.get('/nurses', nurseController.getAllNurses);
  app.get('/nurses/:id', nurseController.getNurseById);
  app.put('/nurses/:id', nurseController.updateNurseById);
  app.post('/nurses', nurseController.createNurse);
  app.delete('/nurses/:id', nurseController.deleteNurse);
};
