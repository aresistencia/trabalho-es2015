var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.urlencoded({ extended: false });

var fs = require('fs');
var dbFile = "jogo.db";
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

app.use(express.static('public'));

app.get('/lista-niveis', function(request, response) {

  db.all("SELECT * FROM Niveis", function(err, rows) {
    if (err) {
      console.log(err);
    } else {
      response.json(rows);
    }
  });

});

app.get('/nivel/:nivelID', function(request, response) {

  // Consulta para listar informacoes dos desafios do nivel da rota requisitada
  db.all("SELECT n.id nivel_id, d.id desafio_id, n.titulo nivel_titulo, d.titulo desafio_titulo, d.pontuacao desafio_pontuacao FROM Niveis n INNER JOIN Niveis_Desafios nd ON n.id = nd.nivel_id INNER JOIN Desafios d ON nd.desafio_id = d.id WHERE n.id = " + request.params.nivelID, function(err, rows) {

    // Checa se houve algum erro na consulta
    if (err) {
      console.log(err);
    } else {

      // Checa se o resultado da consulta eh uma tabela vazia, ou seja, se o
      // nivel existe ou nao
      if (rows.length === 0) {
        response.status(404).json("Nivel " + request.params.nivelID + " nao existe");
      } else {

        // Objeto onde sera armazenada a resposta da requisicao
        var desafiosNivel = {};

        // Armazena na chave 'nivel' as informacoes do nivel atual. A tupla de
        // indice zero foi usada porque todas as tuplas terao esse mesmo valor
        // para essa coluna.
        desafiosNivel.nivel = {
          'id': rows[0].nivel_id,
          'titulo': rows[0].nivel_titulo
        };

        // Varre a lista de tuplas da relacao resultante da consulta e armaneza
        // as ifnromacoes referentes aos desafios em 'listaDesafios'
        var listaDesafios = [];
        rows.forEach(function(row) {
          var auxDesafio = {
            'titulo': row.desafio_titulo,
            'pontuacao': row.desafio_pontuacao,
            'id': row.desafio_id
          };
          listaDesafios.push(auxDesafio);
        });

        // Armazena na chave 'desafios' a lista de desafios do nivel atual
        desafiosNivel.desafios = listaDesafios;

        // Responde a requisicao com informacoes dos desafios do nivel atual
        response.json(desafiosNivel);
      }
    }
  });
});

app.get('/nivel/:nivelID/desafio/:desafioID', function(request, response) {

  db.all("SELECT d.id desafio_id, d.titulo desafio_titulo, r.id resposta_id, r.pontos resposta_pontos, r.resposta resposta_solucao FROM Desafios d INNER JOIN Respostas r ON d.id = r.desafio_id WHERE d.id = " + request.params.desafioID, function(err, rows) {

    if (err) {
      console.log(err); 
    } else {

      if (rows.length === 0) {
        response.status(404).json("Problema...");
      } else {
        var respostas = {
          id: rows[0].desafio_id,
          titulo: rows[0].desafio_titulo,
          respostas: []
        };

        rows.forEach(function(row) {
          var auxResposta = {
            'id': row.resposta_id,
            'pontos': row.resposta_pontos,
            'resposta': ""
          };
          respostas.respostas.push(auxResposta);
        });

        response.json(respostas);
      }
    }

  });

});

app.post('/nivel/:nivelID/desafio/:desafioID', parseUrlEncoded, function(request, response) {

  var nivel = request.params.nivelID,
      desafio = request.params.desafioID,
      reqResposta = request.body.resposta,
      resResposta = { "resposta": "", "id": -1 };

  db.all("SELECT * FROM Respostas WHERE desafio_id = " + desafio, function(err, rows) {
    rows.forEach(function(row) {
      if (row.resposta === reqResposta) {
        resResposta.resposta = row.resposta;
        resResposta.id = row.id;
      }
    });
    response.status(201).json(resResposta);
  });

});

module.exports = app;