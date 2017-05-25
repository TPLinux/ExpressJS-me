var mongo = require('mongodb');
var mdb = mongo.MongoClient;

var conn = function(cb = function(){}){
    mdb.connect("mongodb://localhost:27017/test", function(err, db) {
	if(!err) {
	    // console.log("We are connected");
	    cb(db);
	}else
	    console.log(err);
    });
}

var mdbFunc = {
    ObjId: function(aId){
	var o_id = new mongo.ObjectID(aId);
	return o_id;
    },
    mdbFind: function(aCollection, aDocument, cb = function(){}, aOption = {}){
	conn(function(db){
	    db.collection(aCollection).find(aDocument, aOption).toArray(function(err, result){
		if(err)
		    cb(err,null);
		else
		    cb(null,result);
	    });
	    db.close();
	});
    },
    mdbFindSort: function(aCollection, aDocument, aSort, cb = function(){}, aOption){
	conn(function(db){
	    db.collection(aCollection).find(aDocument, aOption).sort(aSort).toArray(function(err, result){
		if(err)
		    cb(err,null);
		else
		    cb(null,result);
	    });
	    db.close();
	});
    },
    mdbInsert: function(aCollection, aDocument, cb = function(){}){
	conn(function(db){
	    db.collection(aCollection).insert(aDocument, function(err, result){
		if(err)
		    cb(err,null);
		else
		    cb(null,result);
	    });
	    db.close();
	});
    },

    mdbUpdateOne: function(aCollection, aWhere, aDocument, cb = function(){}){
	conn(function(db){
	    db.collection(aCollection).updateOne(aWhere, aDocument, function(err, result){
		if(err)
		    cb(err,null);
		else
		    cb(null,result);
	    });
	    db.close();
	});
    },
    mdbUpdateMany: function(aCollection, aWhere, aDocument, cb = function(){}){
	conn(function(db){
	    db.collection(aCollection).updateMany(aWhere, aDocument, function(err, result){
		if(err)
		    cb(err,null);
		else
		    cb(null,result);
	    });
	    db.close();
	});
    },
    mdbDeleteMany: function(aCollection, aDocument, cb = function(){}){
	conn(function(db){
	    db.collection(aCollection).deleteMany(aDocument, function(err, result){
		if(err)
		    cb(err,null);
		else
		    cb(null,result);
	    });
	    db.close();
	});
    },
    mdbDeleteOne: function(aCollection, aDocument, cb = function(){}){
	conn(function(db){
	    db.collection(aCollection).deleteOne(aDocument, function(err, result){
		if(err)
		    cb(err,null);
		else
		    cb(null,result);
	    });
	    db.close();
	});
    },
    mdbDropCollection: function(aCollection, cb = function(){}){
	conn(function(db){
	    var collection = db.collection(aCollection);
	    collection.drop(function(err, reply) {
		if(err)
		    cb(err, null);
		else
		    cb(null, reply);
	    });
	    db.close();
	});
    },
    mdbCount: function(aCollection, cb = function(){}){
	conn(function(db){
	    var collection = db.collection(aCollection);
	    collection.count(function(err, count) {
		if(err)
		    cb(err, null);
		else
		    cb(null, count);
	    });
	    db.close();
	});
    }
}

module.exports = mdbFunc;
