var r = require('../libs/Controller');
var mdb = r.mdb;
var lang;

r.use(function(req, re, next){
    lang = r.lang[req.session.dlang];
    next();
});

r.get('/', function(req, res){
    res.send(lang.name);
});

r.get('/msg', function(req, res){
    res.send(lang.msg);
});

r.get('/del', function(req, res){
    req.session.destroy;
    res.redirect('back');
});

module.exports = r;
