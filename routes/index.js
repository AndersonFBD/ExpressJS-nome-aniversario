var express = require('express');
var router = express.Router();
var calculaIdade = require('../scripts/calculaIdade');
const identificaGenero = require('../scripts/identificaGenero');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/idade/:nome/:sexo/:dataN', function(req, res,next) {
  let nome = req.params.nome;
  let sexo = req.params.sexo;
  let dataN = req.params.dataN;
  let idade = calculaIdade(dataN);
  let genero = identificaGenero(sexo);
  res.render('resultado', {genero:genero, nome:nome, idade:idade});
});

router.get('/idade2', function(req, res, next) {
  let nome = req.query.nome;
  let sexo = req.query.sexo;
  let data = req.query.data;
  let idade = calculaIdade(data);
  let genero = identificaGenero(sexo);
  res.render('resultado', {genero:genero, nome:nome, idade:idade});
});

router.post('/idade3', function(req, res, next) {
  let nome = req.body.nome;
  let sexo = req.body.sexo;
  let dataNascimento = req.body.dataNascimento;
  console.log(dataNascimento);
  let idade = calculaIdade(dataNascimento);
  let genero = identificaGenero(sexo);
  res.render('resultado', {genero:genero, nome:nome, idade:idade});
});

module.exports = router;
