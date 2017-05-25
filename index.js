var r = require('../libs/Controller');
var mdb = r.mdb;
var lang;

r.use(function(req, res, next){
    lang = r.lang[r.session.dlang];
    next();
});

r.get('/', function(req, res){
    console.log(lang);
    res.send(lang.name);
});

r.get('/del', function(req, res){
    req.session.destroy();
    res.redirect('back');
});
module.exports = r;
