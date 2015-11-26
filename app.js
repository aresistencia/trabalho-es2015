var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.urlencoded({ extended: false });

var fs = require('fs');
var dbFile = "jogo.db";
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

// Criacao do banco de dados do jogo
db.serialize(function() {
  if(!fs.existsSync(dbFile)) {

    // Cria esquema do banco de dados do jogo
    db.run("CREATE TABLE Niveis (id int PRIMARY KEY, titulo varchar(30), isDisponivel int, desafiosCompletados int)");
    db.run("CREATE TABLE Desafios (DesafioID int, NivelID int, Titulo varchar(30), Resposta varchar(30))");

    // Cria lista de niveis do jogo
    db.run("INSERT INTO Niveis VALUES (1, 'Métodos Ágeis', 1, 1)");
    db.run("INSERT INTO Niveis VALUES (2, 'Métodos Tradicionais', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (3, '', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (4, '', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (5, '', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (6, '', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (7, '', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (8, '', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (9, '', 0, 0)");

  }
});

app.use(express.static('public'));

app.get('/lista-niveis', function(request, response) {

  var novaListaNiveis = [];

  db.all("SELECT * FROM Niveis", function(err, rows) {
    response.json(rows);
  });

});

app.get('/nivel/:nivelID', function(request, response) {
  var desafios = infoDesafios[request.params.nivelID];
  if (!desafios) {
    response.status(404).json("Nivel " + request.params.nivelID + " nao existe");
  } else {
    response.json(desafios);
  }
});

app.get('/nivel/:nivelID/desafio/:desafioID', function(request, response) {
  var nivel = infoRespostas[request.params.nivelID];
  if (!nivel) {
    response.status(404).json("Nivel " + request.params.nivelID + " nao existe");
  } else {
    var desafio = infoRespostas[request.params.nivelID].desafios[request.params.desafioID];
    if (!desafio) {
      response.status(404).json("Desafio " + request.params.desafioID + " do nivel "+ request.params.nivelID + " nao existe");
    } else {
      response.json(desafio);
    }
  }
});

app.post('/nivel/:nivelID/desafio/:desafioID', parseUrlEncoded, function(request, response) {

  var nivel = request.params.nivelID,
      desafio = request.params.desafioID,
      respostas = respostasDesafios[nivel][desafio],
      reqResposta = request.body.resposta,
      resResposta = { "resposta": "", "id": -1 };

  respostas.forEach(function(resposta) {
    if (resposta.resposta === reqResposta) {
      resResposta = resposta;
    }
  });

  response.status(201).json(resResposta);

});

// Variaveis para auxiliar as respostas das requisicoes

// Lista com informacao dos desafios desafios de cada nivel
var infoDesafios = [
  { /* Objeto vazio para facilitar a indexacao: nivel 1 -> indice 1 */ },
  {
    'nivel': {
      'titulo': 'Métodos Ágeis',
      'id': 1
    },
    'desafios': [
      { 'titulo': 'Scrum', 'pontuacao': 0, 'id': 1 },
      { 'titulo': 'XP', 'pontuacao': 0, 'id': 2 },
      { 'titulo': 'Kanban', 'pontuacao': 0, 'id': 3 }
    ]
  }
];

// Lista com a pontuacao da resposta dos desafios de cada nivel
var infoRespostas = [
  { /* Objeto vazio para facilitar a indexacao: nivel 1 -> indice 1 */ },
  {
    "nivelID": 1,
    "desafios": [
      { /* Objeto vazio para facilitar a indexacao: desafio 1 -> indice 1 */ },
      {
        "id": 1,
        "titulo": "Scrum",
        "respostas": [
          { "id": 1, "pontos": 40, "resposta": "" },
          { "id": 2, "pontos": 15, "resposta": "" },
          { "id": 3, "pontos": 10, "resposta": "" },
          { "id": 4, "pontos": 11, "resposta": "" },
          { "id": 5, "pontos": 4, "resposta": "" },
          { "id": 6, "pontos": 9, "resposta": "" },
          { "id": 7, "pontos": 5, "resposta": "" }
        ]
      },
      {
        "id": 2,
        "titulo": "XP",
        "respostas": [
          { "id": 1, "pontos": 40, "resposta": "" },
          { "id": 2, "pontos": 15, "resposta": "" },
          { "id": 3, "pontos": 10, "resposta": "" },
          { "id": 4, "pontos": 11, "resposta": "" },
          { "id": 5, "pontos": 4, "resposta": "" }
        ]
      }
    ]
  }
];

// Respostas dos desafios
var respostasDesafios = [
  [ /* Para facilitar indexacao: nivel 1 -> indice 1 */ ],
  [
    { /* Para facilitar indexacao: desafio 1 -> indice 1 */ },
    [
      { "id": 1, "resposta": "Corridas" },
      { "id": 2, "resposta": "Mestre do Scrum" },
      { "id": 3, "resposta": "Dono do Produto" },
      { "id": 4, "resposta": "Time" },
      { "id": 5, "resposta": "Fluxo de Processo" },
      { "id": 6, "resposta": "Reuniões Diárias" },
      { "id": 7, "resposta": "Revisão" }
    ]
  ]
];

module.exports = app;