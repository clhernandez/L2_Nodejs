var express = require('express');
var request = require('request');

var router = express.Router();

router.post('/login', function (req, res){
	var url = "/";

	var nombreusuario = req.body.email;
	var password = req.body.password;

	request.post({url:'http://localhost:3001/auth/login', form: {user:nombreusuario, passwd:password}}, function(err,response,body){ 
		if (!err && response.statusCode == 200) {
	    	
	    	body = JSON.parse(body);

	    	console.log(body);
	    	console.log(body.sistema);

		    if(body.sistema!=null){
		    	
		    	console.log('Usuario valido, sistema: ' + body.sistema);
		    	if(body.sistema==='1'){
		    		url = "/finanzas/dashboard";
		    	}else{
		    		url = "/rrhh/dashboard";
		    	}

		    }
	  	}
	  	res.redirect(url);
	});
});


router.get('/logout', function(req, res, next) {
	req.db.usuarios.find().toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	});

	res.redirect("/");
});


module.exports = router;
