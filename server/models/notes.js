var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    note: {type: String, required: true}
},{timestamps: true});

mongoose.model('Note', NoteSchema);