var express = require('express');
var router = express.Router();

router.post('/login', function (req, res){
	var nombreusuario = req.body.email;
	var password = req.body.password;

	req.db.usuarios.findOne({email:nombreusuario, passwd:password}, function(err, result) {
	    console.log(result);
	    var url = "/";
	    if(result!=null){
	    	console.log('Usuario valido, sistema: ' + result.sistema);
	    	if(result.sistema==='1'){
	    		url="/finanzas/dashboard";
	    	}else{
	    		url="/rrhh/dashboard";
	    	}
	    }
	    res.statusCode = 302;
		res.setHeader("Content-Type", "text/html");
		res.setHeader("Location", url);
		res.end();
	});

});


router.get('/logout', function(req, res, next) {
	req.db.usuarios.find().toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	});

	res.send('respond with a resource');
});


module.exports = router;
