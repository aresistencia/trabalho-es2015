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

// Teste para a rota '/nivel/1/desafio/2'
describe('Faz requisicao para a lista de pontuacao das respostas do desafio 2 do nivel 1', function() {

  it('Retorna codigo de status 200', function(done) {
    request(app)
      .get('/nivel/1/desafio/2')
      .expect(200, done);
  });

  it('Retorna um arquivo no formato JSON', function(done) {
    request(app)
      .get('/nivel/1/desafio/2')
      .expect('Content-Type', /json/, done);
  });

  it('Retorna uma lista com a pontuacao das respostas do desafio 2 do nivel 1', function(done) {
    request(app)
      .get('/nivel/1/desafio/2')
      .expect(infoRespostas[1].desafios[2], done);
  });

});

// Teste para rotas que nao existem
describe('Faz requisicoes para rotas de niveis e desafios que nao existem no jogo', function() {

  it('Rotorna codigo de status 404 para a rota para o nivel 10', function(done) {
    request(app)
      .get('/nivel/10')
      .expect(404, done);
  });

    it('Rotorna codigo de status 404 para a rota para o desafio 976 do nivel 320', function(done) {
    request(app)
      .get('/nivel/320/desafio/976')
      .expect(404, done);
  });

});

// Testes para tratar respostas corretas
describe('Faz requisicoes HTTP POST com respostas CORRETAS para o desafio 1 do nivel 1 ("Scrum")', function() {

  it('Retorna codigo de status 201', function(done) {
    request(app)
      .post('/nivel/1/desafio/1')
      .send('resposta=Corridas')
      .expect(201, done);
  });

  it('Retorna ID 1 para resposta "Corridas"', function(done) {
    request(app)
      .post('/nivel/1/desafio/1')
      .send('resposta=Corridas')
      .expect({"resposta": "Corridas", "id": 1}, done);
  });

  it('Retorna ID 2 para resposta "Mestre do Scrum"', function(done) {
    request(app)
      .post('/nivel/1/desafio/1')
      .send('resposta=Mestre+do+Scrum')
      .expect({"resposta": "Mestre do Scrum", "id": 2}, done);
  });

  it('Retorna ID 3 para resposta "Dono do Produto"', function(done) {
    request(app)
      .post('/nivel/1/desafio/1')
      .send('resposta=Dono+do+Produto')
      .expect({"resposta": "Dono do Produto", "id": 3}, done);
  });

  it('Retorna ID 4 para resposta "Time"', function(done) {
    request(app)
      .post('/nivel/1/desafio/1')
      .send('resposta=Time')
      .expect({"resposta": "Time", "id": 4}, done);
  });

  it('Retorna ID 5 para resposta "Fluxo de Processo"', function(done) {
    request(app)
      .post('/nivel/1/desafio/1')
      .send('resposta=Fluxo+de+Processo')
      .expect({"resposta": "Fluxo de Processo", "id": 5}, done);
  });

  it('Retorna ID 6 para resposta "Reuniões Diárias"', function(done) {
    request(app)
      .post('/nivel/1/desafio/1')
      .send('resposta=Reuniões+Diárias')
      .expect({"resposta": "Reuniões Diárias", "id": 6}, done);
  });

  it('Retorna ID 7 para resposta "Revisão"', function(done) {
    request(app)
      .post('/nivel/1/desafio/1')
      .send('resposta=Revisão')
      .expect({"resposta": "Revisão", "id": 7}, done);
  });

});

// Testes para tratar respostas erradas
describe('Faz requisicoes HTTP POST com respostas ERRADAS para o desafio 1 do nivel 1 ("Scrum")', function() {

  it('Retorna codigo de status 201', function(done) {
    request(app)
      .post('/nivel/1/desafio/1')
      .send('resposta=Análise+de+Risco')
      .expect(201, done);
  });

  it('Retorna ID -1 para resposta "Análise de Risco"', function(done) {
    request(app)
      .post('/nivel/1/desafio/1')
      .send('resposta=Análise+de+Risco')
      .expect({"resposta": "", "id": -1}, done);
  });

  it('Retorna ID -1 para resposta "Fluxo de Dados"', function(done) {
    request(app)
      .post('/nivel/1/desafio/1')
      .send('resposta=Fluxo+de+Dados')
      .expect({"resposta": "", "id": -1}, done);
  });

});

// Testa logins CORRETOS
describe('Faz requisicoes HTTP POST com usuarios e senhas corretos', function() {

  it('Retorna codigo de status 201', function(done) {
    request(app)
      .post('/login')
      .send('username=admin&password=12345')
      .expect(201, done);
  });

  it('Retorna arquivo em formato JSON', function(done) {
    request(app)
      .post('/login')
      .send('username=admin&password=12345')
      .expect('Content-Type', /json/, done);
  });

  it('Retorna mensagem de sucesso para login do usuario "admin" e senha "12345"', function(done) {
    request(app)
      .post('/login')
      .send('username=admin&password=12345')
      .expect({"username": "admin", "isSuccessful": true}, done);
  });

  it('Retorna mensagem de sucesso para login do usuario "jlennon" e senha "12345"', function(done) {
    request(app)
      .post('/login')
      .send('username=jlennon&password=12345')
      .expect({"username": "jlennon", "isSuccessful": true}, done);
  });

  it('Retorna mensagem de sucesso para login do usuario "pmacca" e senha "12345"', function(done) {
    request(app)
      .post('/login')
      .send('username=pmacca&password=12345')
      .expect({"username": "pmacca", "isSuccessful": true}, done);
  });

  it('Retorna mensagem de sucesso para login do usuario "harrison" e senha "12345"', function(done) {
    request(app)
      .post('/login')
      .send('username=harrison&password=12345')
      .expect({"username": "harrison", "isSuccessful": true}, done);
  });

  it('Retorna mensagem de sucesso para login do usuario "rstarr" e senha "12345"', function(done) {
    request(app)
      .post('/login')
      .send('username=rstarr&password=12345')
      .expect({"username": "rstarr", "isSuccessful": true}, done);
  });

});


// Testa logins INCORRETOS
describe('Faz requisicoes HTTP POST com usuarios e senhas corretos', function() {

  it('Retorna codigo de status 201', function(done) {
    request(app)
      .post('/login')
      .send('username=admin&password=12345')
      .expect(201, done);
  });

  it('Retorna arquivo em formato JSON', function(done) {
    request(app)
      .post('/login')
      .send('username=admin&password=12345')
      .expect('Content-Type', /json/, done);
  });

  it('Retorna mensagem de erro para login do usuario "bwilson" e senha "12345"', function(done) {
    request(app)
      .post('/login')
      .send('username=bwilson&password=12345')
      .expect({"username": "", "isSuccessful": false}, done);
  });

  it('Retorna mensagem de erro para login do usuario "mikelove" e senha "12345"', function(done) {
    request(app)
      .post('/login')
      .send('username=mikelove&password=12345')
      .expect({"username": "", "isSuccessful": false}, done);
  });

});


// Variaveis para auxiliar os testes
var listaNiveis = [
  {
    "id": 1,
    "titulo": "Métodos Ágeis",
    "is_disponivel": 1,
    "desafios_completados": 0
  },
  {
    "id": 2,
    "titulo": "Métodos Tradicionais",
    "is_disponivel": 0,
    "desafios_completados": 0
  },
  {
    "id": 3,
    "titulo": "",
    "is_disponivel": 0,
    "desafios_completados": 0
  },
  {
    "id": 4,
    "titulo": "",
    "is_disponivel": 0,
    "desafios_completados": 0
  },
  {
    "id": 5,
    "titulo": "",
    "is_disponivel": 0,
    "desafios_completados": 0
  },
  {
    "id": 6,
    "titulo": "",
    "is_disponivel": 0,
    "desafios_completados": 0
  },
  {
    "id": 7,
    "titulo": "",
    "is_disponivel": 0,
    "desafios_completados": 0
  },
  {
    "id": 8,
    "titulo": "",
    "is_disponivel": 0,
    "desafios_completados": 0
  },
  {
    "id": 9,
    "titulo": "",
    "is_disponivel": 0,
    "desafios_completados": 0
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
      },
      {
        "id": 2,
        "titulo": "XP",
        "respostas": [
          { "id": 8, "pontos": 40, "resposta": "" },
          { "id": 9, "pontos": 15, "resposta": "" },
          { "id": 10, "pontos": 10, "resposta": "" },
          { "id": 11, "pontos": 11, "resposta": "" },
          { "id": 12, "pontos": 4, "resposta": "" }
        ]
      }
    ]
  }
];