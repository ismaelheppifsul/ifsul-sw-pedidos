var express = require('express');
var router = express.Router();
var PedidoDAO = require('../dao/PedidoDAO');
var Pedido = require('../models/Pedido');

var pedidoDAO = new PedidoDAO();

// GET - retorna todos pedidos
router.get('/pedidos', function(req, res, next) {
    res.send(pedidoDAO.getAll());
  });

// GET - retorna um  pedido
router.get('/pedidos/:id', function(req, res, next) {
  var id = req.params.id;

  if (isNaN(id)) {
    res.statusCode = 400;
    res.send({message:'id deve ser um número'});
  } else {

	  let temp = pedidoDAO.get(id);

	  if (temp === null) {
		res.statusCode = 404;
		res.send({message:'Pedido com id: ' + id + ' não encontrado'});  
	  } else {
		res.send(temp);
	  }
  }
});

// POST - cria um pedido
router.post('/pedidos', function(req, res, next) {
  var body = req.body;

  if(typeof(body.titulo) !== 'string') {
    res.statusCode = 400;
    res.send({message:'titulo deve ser uma string'});
	return;
  }
  if(typeof(body.quantidade) !== 'string') {
    res.statusCode = 400;
    res.send({message:'Quantidade deve ser uma string'});
	return;
  }
  if(typeof(body.valor) !== 'string') {
    res.statusCode = 400;
    res.send({message:'valor deve ser uma string'});
	return;
  }
  if(typeof(body.total) !== 'string') {
    res.statusCode = 400;
    res.send({message:'total deve ser uma string'});
	return;
  }


  var pedido = new Pedido(
      pedidoDAO.getNextID(),
      body.titulo,
      body.quantidade,
      body.valor,
      body.total
    );

  PedidoDAO.add(pedido);
  
  res.statusCode = 201;
  res.send(pedido)
});

// PUT - atualiza um pedido
router.put('/pedidos/:id', function(req, res, next){
  var id = req.params.id;

  if (isNaN(id)) {
    res.statusCode = 400;
    res.send({message:'id deve ser um número'});
  }

  let temp = pedidoDAO.get(id);

  if (temp === null) {
    res.statusCode = 404;
    res.send({message:'Pedido com id: ' + id + ' não encontrado'});  
  }

  var body = req.body;

  if(typeof(body.titulo) !== 'string') {
    res.statusCode = 400;
    res.send({message:'titulo deve ser uma string'});
  }
  if(typeof(body.quantidade) !== 'string') {
    res.statusCode = 400;
    res.send({message:'quantidade deve ser uma string'});
  }
  if(typeof(body.valor) !== 'string') {
    res.statusCode = 400;
    res.send({message:'valor deve ser uma string'});
  }
  if(typeof(body.total) !== 'string') {
    res.statusCode = 400;
    res.send({message:'total deve ser uma string'});
  }

  var pedido = new Pedido(
    id,
    body.titulo,
    body.quantidade,
    body.valor,
    body.total
  );

  pedidoDAO.update(pedido);
  res.send(pedido);
});

// DELETE - deleta um pedido
router.delete('/pedidos/:id', function(req, res, next) {
  var id = req.params.id;

  if (isNaN(id)) {
    res.statusCode = 400;
    res.send({message:'id deve ser um número'});
  } else {

	  let temp = pedidoDAO.get(id);

	  if (temp === null) {
		res.statusCode = 404;
		res.send({message:'Pedido com id: ' + id + ' não encontrado'});  
	  } else {
		pedidoDAO.delete(id);
		res.send(temp);
	  }
  }
});

module.exports = router;
