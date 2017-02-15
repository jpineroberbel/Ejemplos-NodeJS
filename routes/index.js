var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Ejemplo ruta con parámetros
router.get('/param/:param1', function (req, res) {
  res.send("He recibido como parámetro el valor: "+req.params["param1"])
})

// Ejemplo get con expresiones regulares
router.get('/expreg/*/',function (req, res) {
  res.send('Entra en caso con expresion regular, siendo la subcarpeta: '+req.params[0])
})

// Otro ejemplo get con expresiones regulares
router.get('/*/index.html',function (req, res) {
  res.send('Este otro ejemplo de expre. regular, busca una carpeta <strong>'+req.params[0]+'</strong> y dentro de ella buscaría index.html')
})

// Ejemplos de cómo capturar post, put y delete
router.post('/libros',function(req, res) {
  // Simulamos que en el post vienen los datos del libro a añadir
  var titulo = req.body.titulo;
  var autor = req.body.autor;
  var isbn = req.body.isbn;
  
  // Uso una plantilla JADE
  res.render('apiLibros', { tipoPeticion: 'post', titulo: titulo, autor: autor, isbn: isbn });
})

router.put('/libros',function(req, res) {
  var titulo = req.body.titulo;
  var autor = req.body.autor;
  var isbn = req.body.isbn;
  
  // Uso una plantilla JADE
  res.render('apiLibros', { tipoPeticion: 'post', titulo: titulo, autor: autor, isbn: isbn });

})

router.delete('/libros',function(req, res) {
  var titulo = req.body.titulo;
  var autor = req.body.autor;
  var isbn = req.body.isbn;
  
  // Uso una plantilla JADE
  res.render('apiLibros', { tipoPeticion: 'post', titulo: titulo, autor: autor, isbn: isbn });

})

module.exports = router;
