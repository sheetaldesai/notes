var taskController = require('../controllers/notes.js');

module.exports = function(app) {
    app.get('/notes', function(req, res) {
        taskController.getAll(req, res);
    });
    app.post('/notes', function(req, res) {
        taskController.create(req, res);
    });
}