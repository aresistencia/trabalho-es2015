var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/lista-niveis', function(request, response) {
  response.json(listaNiveis);
});

app.get('/nivel/1', function(request, response) {
  response.send(infoDesafios[1]);
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

module.exports = app;