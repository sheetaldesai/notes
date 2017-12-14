var express     = require("express");
var path        = require('path');
var app         = express();
var bodyParser  = require('body-parser');

//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, "./client/static")));
app.use(express.static(path.join(__dirname, "./client/dist")));
require('./server/config/notes_setup.js');
var route = require('./server/config/routes.js');
route(app);

app.listen(8000,function(){
    console.log("Listening on port 8000");
});