var express = require('express');
var request = require('request');
var router = express.Router();
var timeoutGlobal = 2000;

router.post('/login', function (req, res){
	var url = "/";
	var data = {};
	var nombreusuario = req.body.email;
	var password = req.body.password;

	request.post({url:'http://localhost:3001/auth/login', timeout:timeoutGlobal, form: {user:nombreusuario, passwd:password}}, function(err,response,body){ 
		if (!err && response.statusCode == 200) {
	    	
	    	body = JSON.parse(body);

	    	console.log(body);
	    	console.log(body.departamento);

		    if(body.departamento!=null){
		    	
		    	console.log('Usuario valido, sistema: ' + body.departamento);
		    	if(body.departamento==='Finanzas'){
		    		url = "/finanzas/dashboard";
		    	}else{
		    		url = "/rrhh/dashboard";
		    	}
		    	res.redirect(url);
		    	
		    }else{
		    	data.codigo=-99;
		    	data.mensaje = "Usuario o contraseña incorrectos.";	
		    	res.render("index", data);
		    }

	  	}else{
	  		data.codigo=-1;
	    	data.mensaje = "Ocurrio un problema al intentar realizar el login, vuelva a intentarlo en unos momentos.";	
	  		res.render("index", data);
	  	}
	});
});


router.get('/logout', function(req, res, next) {
	/*req.db.usuarios.find().toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	});*/

	res.redirect("/");
});


module.exports = router;
