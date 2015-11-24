var request = require('supertest'),
    app = require('./app');

// Testes para a rota '/'
describe('Faz requisicao para rota raiz', function() {

  it('Retorna codigo de status 200', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('Retorna um formato HTML', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done);
  });

});

// Testes para a rota '/lista-niveis'
describe('Faz requisicao para a lista de niveis', function() {

  it('Retorna codigo de status 200', function(done) {
    request(app)
      .get('/lista-niveis')
      .expect(200, done);
  });

  it('Retorna um arquivo JSON', function(done) {
    request(app)
      .get('/lista-niveis')
      .expect('Content-Type', /json/, done);
  });

  it('Retorna lista de niveis', function(done) {
    request(app)
      .get('/lista-niveis')
      .expect(listaNiveis, done);
  });

});

// Testes para a rota '/nivel/1'
describe('Faz requisicao para a lista de desafios do nivel 1', function() {

  it('Retorna codigo de status 200', function(done) {
    request(app)
      .get('/nivel/1')
      .expect(200, done);
  });

  it('Retorna um arquivo JSON', function(done) {
    request(app)
      .get('/nivel/1')
      .expect('Content-Type', /json/, done);
  });

  it('Retorna lista de desafios', function(done) {
    request(app)
      .get('/nivel/1')
      .expect(infoDesafios[1], done);
  });

});

// Teste para a rota '/nivel/1/desafio/1'
describe('Faz requisicao para a lista de pontuacao das respostas do desafio 1 do nivel 1', function() {

  it('Retorna codigo de status 200', function(done) {
    request(app)
      .get('/nivel/1/desafio/1')
      .expect(200, done);
  });

  it('Retorna um arquivo no formato JSON', function(done) {
    request(app)
      .get('/nivel/1/desafio/1')
      .expect('Content-Type', /json/, done);
  });

  it('Retorna uma lista com a pontuacao das respostas do desafio 1 do nivel 1', function(done) {
    request(app)
      .get('/nivel/1/desafio/1')
      .expect(infoRespostas[1].desafios[1], done);
  });

});

// Variaveis para auxiliar os testes
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
    "nivel": {
      "titulo": "Métodos Ágeis",
      "id": 1
    },
    "desafios": [
      { "titulo": "Scrum", "pontuacao": 0, "id": 1 },
      { "titulo": "XP", "pontuacao": 0, "id": 2 },
      { "titulo": "Kanban", "pontuacao": 0, "id": 3 }
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