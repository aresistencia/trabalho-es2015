var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/lista-niveis', function(request, response) {
  response.json(listaNiveis);
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

app.post('/nivel/1/desafio/1', parseUrlEncoded, function(request, response) {

  var resposta = request.body.resposta;
  if (resposta === "Corridas") {
    response.status(201).json({ "resposta": "Corridas", "id": 1 });
  } else if (resposta === "Mestre do Scrum") {
    response.status(201).json({ "resposta": "Mestre do Scrum", "id": 2 });
  } else {
    response.status(201).json({ "resposta": "", "id": -1 });
  }

});

// Variaveis para auxiliar as respostas das requisicoes

// Lista de niveis do jogo
var listaNiveis = [
  {
    "id": 1,
    "titulo": "Métodos Ágeis",
    "isDisponivel": true,
    "desafiosCompletados": 1
  },
  {
    "id": 2,
    "titulo": "Métodos Tradicionais",
    "isDisponivel": false,
    "desafiosCompletados": 0
  },
  {
    "id": 3,
    "titulo": "",
    "isDisponivel": false,
    "desafiosCompletados": 0
  },
  {
    "id": 4,
    "titulo": "",
    "isDisponivel": false,
    "desafiosCompletados": 0
  },
  {
    "id": 5,
    "titulo": "",
    "isDisponivel": false,
    "desafiosCompletados": 0
  },
  {
    "id": 6,
    "titulo": "",
    "isDisponivel": false,
    "desafiosCompletados": 0
  },
  {
    "id": 7,
    "titulo": "",
    "isDisponivel": false,
    "desafiosCompletados": 0
  },
  {
    "id": 8,
    "titulo": "",
    "isDisponivel": false,
    "desafiosCompletados": 0
  },
  {
    "id": 9,
    "titulo": "",
    "isDisponivel": false,
    "desafiosCompletados": 0
  }
];

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
      { /* Objeto vazio para facilitar a indexacao: desafio 1 -> desafio 1 */ },
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

module.exports = app;