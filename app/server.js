var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app);
var bodyParser = require('body-parser');
var port = 8081;

//Conexion BD
var db = require('mongoskin').db('mongodb://localhost:27017/Finanzas'); 
// mongodb://user:pass@host:port/dbname
//db.usuario.insert({nombre:'Juan', apellido:'Perez', email: 'asd@asd.cl', passwd:'asd', sistema:'1'});

//FIN Conexion.

server.listen(port);
console.log("Servidor escuchando en el puerto: "+port)

//Path de los CSS que utilizarán para el estilo de la página
app.use("/css", express.static(__dirname + '/css'));

//Path de funciones en Javascript que podrían utilizar
app.use("/function", express.static(__dirname + '/function'));
app.use(bodyParser.urlencoded({ extended: false }));


//Routing
app.get('/', function (req, res) {
	//Listar todos los usuarios a modo de prueba
	/*
	db.collection('usuario').find().toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	});
	*/
	res.sendfile(__dirname + '/view/index.html');
});

app.post('/login', function (req, res){
	var nombreusuario = req.body.email;
	var password = req.body.password;

	db.collection('usuario').findOne({email:nombreusuario, passwd:password}, function(err, result) {
	    //console.log('Band members of Road Crew');
	    console.log(result);
	    if(result!=null){
	    	console.log('Usuario valido, sistema: ' + result.sistema);
	    	if(result.sistema==='1'){
	    		res.sendfile(__dirname + '/view/finanzas/index.html');
	    	}else{
	    		res.sendfile(__dirname + '/view/rrhh/index.html');
	    	}
	    } 
	    res.sendfile(__dirname + '/view/index.html');
	});

	//console.log( db.collection('usuario').count({email:nombreusuario, passwd:password}) );


});