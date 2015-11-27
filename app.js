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

  db.all("SELECT n.id id, n.titulo titulo, n.is_disponivel is_disponivel, IFNULL(SUM(d.is_completo), 0) desafios_completados FROM nivel n LEFT OUTER JOIN desafio d ON n.id = d.nivel_id GROUP BY n.id ORDER BY n.id ASC", function(err, rows) {
    if (err) {
      console.log(err);
    } else {
      response.json(rows);
    }
  });

});

app.get('/nivel/:nivelID', function(request, response) {
  db.serialize(function() {

    // Consulta para listar informacoes dos desafios do nivel da rota requisitada
    db.all("SELECT n.id nivel_id, d.id desafio_id, n.titulo nivel_titulo, d.titulo desafio_titulo, SUM(r.valor) pontuacao, r.is_respondida is_respondida FROM nivel n INNER JOIN desafio d ON n.id = d.nivel_id INNER JOIN resposta r ON d.id = r.desafio_id WHERE n.id = " + request.params.nivelID + " GROUP BY d.id ORDER BY d.id ASC", function(err, rows) {

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
              'pontuacao': row.is_respondida ? row.pontuacao: 0,
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
});

app.get('/nivel/:nivelID/desafio/:desafioID', function(request, response) {

  db.all("SELECT d.id desafio_id, d.titulo desafio_titulo, r.id resposta_id, r.valor resposta_valor, r.solucao resposta_solucao FROM desafio d INNER JOIN resposta r ON d.id = r.desafio_id WHERE d.id = " + request.params.desafioID, function(err, rows) {

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
            'pontos': row.resposta_valor,
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

  db.all("SELECT * FROM resposta WHERE desafio_id = " + desafio, function(err, rows) {
    rows.forEach(function(row) {
      if (row.solucao === reqResposta) {
        resResposta.resposta = row.solucao;
        resResposta.id = row.id;
      }
    });
    response.status(201).json(resResposta);
  });

});

module.exports = app;