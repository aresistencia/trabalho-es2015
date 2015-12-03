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
  db.all("SELECT n.id id, n.titulo titulo, IFNULL(ud.count, 0) desafios_completados, IFNULL(ud.uid1, 0) is_disponivel FROM nivel n LEFT OUTER JOIN (SELECT un.usuario_id uid1, un.nivel_id nid1, IFNULL(d.count, 0) count FROM usuario_nivel un LEFT OUTER JOIN (SELECT ud.usuario_id uid2, COUNT(ud.desafio_id) count, d.nivel_id nid2 FROM usuario_desafio ud INNER JOIN desafio d ON d.id = ud.desafio_id WHERE uid2 = " + userID + " GROUP BY d.nivel_id) AS d ON uid1 = uid2 AND nid1 = nid2 WHERE uid1 = " + userID + ") AS ud ON n.id = ud.nid1;", function(err, rows) {
    if (err) {
      console.log(err);
    } else {
      // Quando um nivel esta disponivel para um usuario, o valor de
      // is_disponivel eh igual ao id do usuario. Para padronizar isso,
      // essa logica muda para 1
      rows.forEach(function(row) {
        if (row.is_disponivel != 0) {
          row.is_disponivel = 1;
        }
      });
      response.json(rows);
    }
  });

});

// Rota para listar a pontuacao dos desafios de um nivel para um usuario logado
app.post('/nivel/:nivelID', parseUrlEncoded, function(request, response) {

  // ID do usuario logado e do nivel que sera consultado
  var userID = request.body.userID,
      nivelID = request.params.nivelID;

  db.serialize(function() {

    // Consulta para listar informacoes dos desafios do nivel requisitada
    db.all("SELECT n.id nivel_id, n.titulo nivel_titulo, d.id id, d.titulo titulo, IFNULL(pontos, 0) pontos FROM nivel n INNER JOIN desafio d ON n.id = d.nivel_id LEFT OUTER JOIN (SELECT r.desafio_id did2, SUM(r.valor) pontos FROM resposta r INNER JOIN usuario_resposta ur ON r.id = ur.resposta_id WHERE ur.usuario_id = " + userID + " GROUP BY r.desafio_id) AS r ON d.id = did2 WHERE n.id = " + nivelID, function(err, rows) {

      // Checa se houve algum erro na consulta
      if (err) {
        console.log(err);
      } else {
        response.json(rows);
      }
    });
  });
});

// Rota para listar as respostas que um usuario logado ja acertou, deixando
// em 'branco' as nao acertadas
app.post('/desafio/:desafioID', parseUrlEncoded, function(request, response) {

  // ID do usuario e do desafio e do nivel que sera consultado
  var userID = request.body.userID,
      desafioID = request.params.desafioID;

  db.all("SELECT d.id desafio_id, d.titulo desafio_titulo, r.id id, r.valor valor, IFNULL(res.solucao, '') solucao FROM desafio d INNER JOIN resposta r ON d.id = r.desafio_id LEFT OUTER JOIN (SELECT r.desafio_id did, r.id id, r.solucao solucao, ur.usuario_id uid FROM resposta r INNER JOIN usuario_resposta ur ON r.id = ur.resposta_id WHERE r.desafio_id = " + desafioID + " AND ur.usuario_id = " + userID + ") AS res ON r.id = res.id WHERE d.id = " + desafioID, function(err, rows) {

    if (err) {
      console.log(err);
    } else {
      response.status(201).json(rows);
    }

  });

});

// Rota para checar se uma resposta submetido por um usuario esta correta
app.post('/desafio/:desafioID/checa-resposta', parseUrlEncoded, function(request, response) {

  var nivel = request.params.nivelID,
      desafio = request.params.desafioID,
      reqResposta = request.body.resposta,
      resResposta = { "resposta": "", "id": -1 },
      userID = request.body.userID;

  db.all("SELECT * FROM resposta WHERE desafio_id = " + desafio, function(err, rows) {
    rows.forEach(function(row) {
      if (row.solucao === reqResposta) {
        db.run("INSERT INTO usuario_resposta VALUES (" + userID + ", " + row.id + ")" );
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
      resObj = {"id": -1, "username": "", "nome": "", "isSuccessful": false};

  db.all("SELECT id, username, password, nome FROM usuario", function(err, rows) {
    if (err) {
      console.log(err);
    } else {
      rows.forEach(function(row) {
        if (row.username === username && row.password === password) {
          resObj.id = row.id;
          resObj.username = row.username;
          resObj.nome = row.nome;
          resObj.isSuccessful = true;
        }
      });
      response.status(201).json(resObj);
    }
  });

});

app.post('/registro', parseUrlEncoded, function(request, response) {
  var username = request.body.username,
      password = request.body.password,
      nome = request.body.pnome + " " + request.body.snome;
  db.run("INSERT INTO usuario (username, password, nome) VALUES (?, ?, ?)", username, password, nome);
  response.status(201).json(username);
});

module.exports = app;