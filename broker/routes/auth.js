var express = require('express');
var router = express.Router();

router.post('/login', function (req, res){
	var nombreusuario = req.body.user;
	var password = req.body.passwd;

	req.db.usuarios.findOne({email:nombreusuario, password:password}, function(err, result) {
	    console.log("result: " + result);
	    
	    if(result==null){
	    	result = {error: 1};
	    }else{
	    	console.log('Usuario valido, sistema: ' + result.departamento);
	    }
	    res.json(result);
	});

});


router.get('/logout', function(req, res, next) {
/*	req.db.usuarios.find().toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	});*/

	res.send('respond with a resource');
});


module.exports = router;
