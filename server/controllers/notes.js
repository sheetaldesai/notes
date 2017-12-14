var mongoose = require('mongoose');
var bodyParser  = require('body-parser');
var Note = mongoose.model('Note');

// Use native promises
mongoose.Promise = global.Promise;

module.exports = (function() {
    return {
    getAll: function(req, res) {
        var promise = Note.find({});
        promise.then(function(results){
            console.log("Found notes ", results);
            res.json(results);
            //res.render('mongooses', {mongooses:results});
        });
    },  
    create: function(req, res) {
        console.log("Create, req.body: ", req.body);
        Note.create(req.body)
        .then(note => {
            console.log("Created new note ",note);
            res.json(note);
        })
        .catch(error => console.log(error));
        //res.render('create');
    }
}
})();