const shiftAssignmentController = require('../controllers/shiftAssignment');

module.exports = (app) => {
  app.get('/shift-assignments', shiftAssignmentController.getAllShiftAssignments);
  app.post('/shift-assignments', shiftAssignmentController.createShiftAssignment);
};
