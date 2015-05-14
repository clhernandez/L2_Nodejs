var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017");
var db = mongoose.connection;
db.on('error', function (err) {
console.log('connection error', err);
});
db.once('open', function () {
console.log('connected.');
});

var UsuarioSchema = new mongoose.Schema({
  username: String,
  passwd: String,
  hash: String
});
var Usuario = mongoose.model('Usuario', UsuarioSchema);

//Clase usuario


//Agregar al usuario test
var admin = new Usuario({
  username: "test2@test.cl",
  passwd: "test2",
});

admin.save(function (err, data) {
if (err) console.log(err);
else console.log('Saved : ', data );
});