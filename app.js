var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/lista-niveis', function(request, response) {
  response.json(listaNiveis);
});

app.get('/nivel/1', function(request, response) {
  response.json(infoDesafios[1]);
});

app.get('/nivel/1/desafio/1', function(request, response) {
  response.json(infoRespostas[1].desafios[1]);
});

// Variaveis para auxiliar as respostas das requisicoes

// Lista de niveis do jogo
var listaNiveis = [
  {
    "id": 1,
    "titulo": "",
    "isDisponivel": true,
    "desafiosCompletados": 1
  },
  {
    "id": 2,
    "titulo": "",
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
      'titulo': 'Metodologias Ágeis',
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
      }
    ]
  }
];

module.exports = app;