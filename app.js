var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.urlencoded({ extended: false });

var fs = require('fs');
var dbFile = "jogo.db";
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

app.use(express.static('public'));

// Rota para listar os niveis disponiveis para o jogar logado
app.post('/lista-niveis', parseUrlEncoded, function(request, response) {

  // ID do usuario que esta acessando a lista de niveis
  var userID = request.body.userID;

  // Consulta para listar tuplas com id, titulo e disponibilidade de cada
  // nivel, assim como numero de desafios copletados neles
  db.all("SELECT n.id id, n.titulo titulo, n.is_disponivel is_disponivel, COUNT(d.is_completo) desafios_completados FROM nivel n LEFT OUTER JOIN usuario_nivel un LEFT OUTER JOIN usuario u LEFT OUTER JOIN usuario_desafio ud LEFT OUTER JOIN desafio d ON n.id = un.nivel_id AND u.id = un.usuario_id AND u.id = ud.usuario_id AND d.id = ud.desafio_id AND u.id = " + userID + " GROUP BY n.id ORDER BY n.id ASC", function(err, rows) {
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

app.get('/desafio/:desafioID', function(request, response) {

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

app.post('/desafio/:desafioID', parseUrlEncoded, function(request, response) {

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

app.post('/login', parseUrlEncoded, function(request, response) {
  var username = request.body.username,
      password = request.body.password,
      resObj = {"username": "", "nome": "", "isSuccessful": false};

  db.all("SELECT username, password, nome FROM usuario", function(err, rows) {
    if (err) {
      console.log(err);
    } else {
      rows.forEach(function(row) {
        if (row.username === username && row.password === password) {
          resObj.username = row.username;
          resObj.nome = row.nome;
          resObj.isSuccessful = true;
        }
      });
      response.status(201).json(resObj);
    }
  });

});

module.exports = app;