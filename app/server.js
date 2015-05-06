var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app);

server.listen(8081);

//Path de los CSS que utilizarán para el estilo de la página
app.use("/css", express.static(__dirname + '/css'));

//Path de funciones en Javascript que podrían utilizar
app.use("/function", express.static(__dirname + '/function'));

//Routing
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/view/index.html');
});
//puede ser get, post, put o delete