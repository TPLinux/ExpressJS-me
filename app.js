var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var lang = require('./lang/lang.js');
// controllers
var index = require('./controllers/index');
var session = require('express-session');
var ip = "localhost";
var port = 3000;


// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
// SESSIONS
app.use(session({
    saveUninitialized: false,
    resave: false,
    cookieName: 'session', // cookie name dictates the key name added to the request object
    secret: 'sib86e[]<>!!\'OHC76023765453BBu76@$%E$#*&Y$&^t09)@(*U#*$&&*gGIYC)_ll;;""\'',
    cookie:  {
	maxAge: null
    }
}));
// static folder
app.use(express.static('public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.set('view engine', 'ejs');

app.use(function(req, res, next){
    if(req.query.dlang != null){
	var theLang = req.query.dlang;
	if(lang[theLang] != null){
	    req.session.dlang = theLang;
	}
    }
    if(req.session.dlang == null){
	req.session.dlang = 'ar';
    }
    next();
});
app.use('/', index);
app.listen(port);
console.log("Running on: " + ip + ":" + port);
