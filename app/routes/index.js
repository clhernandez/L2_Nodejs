var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
/*	
	req.db.usuarios.find().toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	});
*/
	res.render('index', { title: 'Express' });
});

module.exports = router;
