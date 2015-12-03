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
describe('Faz requisicao para a lista de niveis disponiveis para um usuario especifico', function() {

  it('Retorna codigo de status 200', function(done) {
    request(app)
      .post('/lista-niveis')
      .send('userID=3')
      .expect(200, done);
  });

  it('Retorna um arquivo JSON', function(done) {
    request(app)
      .post('/lista-niveis')
      .send('userID=3')
      .expect('Content-Type', /json/, done);
  });

  it('Retorna lista de niveis disponiveis para o usuario 3 (pmacca)', function(done) {
    var niveisUser3 = [
      { "id": 1, "titulo": "Métodos Ágeis", "is_disponivel": 1, "desafios_completados": 3 },
      { "id": 2, "titulo": "Métodos Tradicionais", "is_disponivel": 1, "desafios_completados": 1 },
      { "id": 3, "titulo": "Modelagem", "is_disponivel": 0, "desafios_completados": 0 },
      { "id": 4, "titulo": "Certificação", "is_disponivel": 0, "desafios_completados": 0 },
      { "id": 5, "titulo": "Testes", "is_disponivel": 0, "desafios_completados": 0 },
      { "id": 6, "titulo": "Nível 6", "is_disponivel": 0, "desafios_completados": 0 }
    ];
    request(app)
      .post('/lista-niveis')
      .send('userID=3')
      .expect(niveisUser3, done);
  });

  it('Retorna lista de niveis disponiveis para o usuario 2 (jlennon)', function(done) {
    var niveisUser2 = [
      { "id": 1, "titulo": "Métodos Ágeis", "is_disponivel": 1, "desafios_completados": 1 },
      { "id": 2, "titulo": "Métodos Tradicionais", "is_disponivel": 0, "desafios_completados": 0 },
      { "id": 3, "titulo": "Modelagem", "is_disponivel": 0, "desafios_completados": 0 },
      { "id": 4, "titulo": "Certificação", "is_disponivel": 0, "desafios_completados": 0 },
      { "id": 5, "titulo": "Testes", "is_disponivel": 0, "desafios_completados": 0 },
      { "id": 6, "titulo": "Nível 6", "is_disponivel": 0, "desafios_completados": 0 }
    ];
    request(app)
      .post('/lista-niveis')
      .send('userID=2')
      .expect(niveisUser2, done);
  });

    it('Retorna lista de niveis disponiveis para o usuario 4 (harrison)', function(done) {
    var niveisUser4 = [
      { "id": 1, "titulo": "Métodos Ágeis", "is_disponivel": 1, "desafios_completados": 1 },
      { "id": 2, "titulo": "Métodos Tradicionais", "is_disponivel": 0, "desafios_completados": 0 },
      { "id": 3, "titulo": "Modelagem", "is_disponivel": 0, "desafios_completados": 0 },
      { "id": 4, "titulo": "Certificação", "is_disponivel": 0, "desafios_completados": 0 },
      { "id": 5, "titulo": "Testes", "is_disponivel": 0, "desafios_completados": 0 },
      { "id": 6, "titulo": "Nível 6", "is_disponivel": 0, "desafios_completados": 0 }
    ];
    request(app)
      .post('/lista-niveis')
      .send('userID=4')
      .expect(niveisUser4, done);
  });

});

// Testes para a rota '/nivel/1'
describe('Faz requisicao para a lista de desafios do nivel 1 para um usuario especifico', function() {

  it('Retorna codigo de status 200', function(done) {
    request(app)
      .post('/nivel/1')
      .send('userID=3')
      .expect(200, done);
  });

  it('Retorna um arquivo JSON', function(done) {
    request(app)
      .post('/nivel/1')
      .send('userID=3')
      .expect('Content-Type', /json/, done);
  });

  it('Retorna lista de desafios do usuario 3 (pmacca)', function(done) {
    var nivel1User3 = [
      { "nivel_id": 1, "nivel_titulo": "Métodos Ágeis", "id": 1, "titulo": "Scrum", "pontos": "94" },
      { "nivel_id": 1, "nivel_titulo": "Métodos Ágeis", "id": 2, "titulo": "XP", "pontos": "80" },
      { "nivel_id": 1, "nivel_titulo": "Métodos Ágeis", "id": 3, "titulo": "DAS (desenvolvimento adaptativo de software)", "pontos": "94" },
    ];
    request(app)
      .post('/nivel/1')
      .send('userID=3')
      .expect(nivel1User3, done);
  });

  it('Retorna lista de desafios do usuario 5 (ringo)', function(done) {
    var nivel1User5 = [
      { "nivel_id": 1, "nivel_titulo": "Métodos Ágeis", "id": 1, "titulo": "Scrum", "pontos": "21" },
      { "nivel_id": 1, "nivel_titulo": "Métodos Ágeis", "id": 2, "titulo": "XP", "pontos": "80" },
      { "nivel_id": 1, "nivel_titulo": "Métodos Ágeis", "id": 3, "titulo": "DAS (desenvolvimento adaptativo de software)", "pontos": "0" },
    ];
    request(app)
      .post('/nivel/1')
      .send('userID=5')
      .expect(nivel1User5, done);
  });

});

// Teste para a rota '/desafio/desafioID'
describe('Faz requisicao para a lista das respostas do usuario autenticado', function() {

  it('Retorna codigo de status 201 para rota do desafio 1', function(done) {
    request(app)
      .post('/desafio/1')
      .send('userID=2')
      .expect(201, done);
  });

  it('Retorna um arquivo no formato JSON para rota do desafio 2', function(done) {
    request(app)
      .post('/desafio/2')
      .send('userID=2')
      .expect('Content-Type', /json/, done);
  });

  it('Retorna respostas do desafio 1 do usuario 2 (jlennon)', function(done) {
    var desafio1User2 = [
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 1, 'valor': 40, 'solucao': 'Corridas' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 2, 'valor': 15, 'solucao': 'Mestre do Scrum' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 3, 'valor': 10, 'solucao': 'Dono do Produto' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 4, 'valor': 11, 'solucao': 'Time' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 5, 'valor': 4, 'solucao': 'Fluxo de Processo' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 6, 'valor': 9, 'solucao': 'Reuniões Diárias' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 7, 'valor': 5, 'solucao': 'Revisão' }
    ];
    request(app)
      .post('/desafio/1')
      .send('userID=2')
      .expect(desafio1User2, done);
  });

  it('Retorna respostas do desafio 1 do usuario 3 (pmacca)', function(done) {
    var desafio1User3 = [
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 1, 'valor': 40, 'solucao': 'Corridas' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 2, 'valor': 15, 'solucao': 'Mestre do Scrum' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 3, 'valor': 10, 'solucao': 'Dono do Produto' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 4, 'valor': 11, 'solucao': 'Time' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 5, 'valor': 4, 'solucao': 'Fluxo de Processo' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 6, 'valor': 9, 'solucao': 'Reuniões Diárias' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 7, 'valor': 5, 'solucao': 'Revisão' }
    ];
    request(app)
      .post('/desafio/1')
      .send('userID=3')
      .expect(desafio1User3, done);
  });

  it('Retorna respostas do desafio 1 do usuario 4 (harrison)', function(done) {
    var desafio1User4 = [
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 1, 'valor': 40, 'solucao': 'Corridas' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 2, 'valor': 15, 'solucao': 'Mestre do Scrum' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 3, 'valor': 10, 'solucao': 'Dono do Produto' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 4, 'valor': 11, 'solucao': 'Time' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 5, 'valor': 4, 'solucao': 'Fluxo de Processo' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 6, 'valor': 9, 'solucao': 'Reuniões Diárias' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 7, 'valor': 5, 'solucao': 'Revisão' }
    ];
    request(app)
      .post('/desafio/1')
      .send('userID=4')
      .expect(desafio1User4, done);
  });

  it('Retorna respostas do desafio 1 do usuario 5 (ringo)', function(done) {
    var desafio1User5 = [
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 1, 'valor': 40, 'solucao': '' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 2, 'valor': 15, 'solucao': '' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 3, 'valor': 10, 'solucao': 'Dono do Produto' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 4, 'valor': 11, 'solucao': 'Time' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 5, 'valor': 4, 'solucao': '' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 6, 'valor': 9, 'solucao': '' },
      { 'desafio_id': 1, 'desafio_titulo': 'Scrum', 'id': 7, 'valor': 5, 'solucao': '' }
    ];
    request(app)
      .post('/desafio/1')
      .send('userID=5')
      .expect(desafio1User5, done);
  });

  it('Retorna respostas do desafio 1 do usuario 4 (harrison)', function(done) {
    var desafio2User4 = [
      { 'desafio_id': 2, 'desafio_titulo': 'XP', 'id': 8, 'valor': 40, 'solucao': 'Desenvolvimento em Pares' },
      { 'desafio_id': 2, 'desafio_titulo': 'XP', 'id': 9, 'valor': 15, 'solucao': '' },
      { 'desafio_id': 2, 'desafio_titulo': 'XP', 'id': 10, 'valor': 10, 'solucao': 'Keep It Simple' },
      { 'desafio_id': 2, 'desafio_titulo': 'XP', 'id': 11, 'valor': 11, 'solucao': '' },
      { 'desafio_id': 2, 'desafio_titulo': 'XP', 'id': 12, 'valor': 4, 'solucao': '' }
    ];
    request(app)
      .post('/desafio/2')
      .send('userID=4')
      .expect(desafio2User4, done);
  });

});

// Teste para rotas que nao existem
describe('Faz requisicoes para rotas de niveis e desafios que nao existem no jogo', function() {

  it('Rotorna codigo de status 404 para a rota para o nivel 10', function(done) {
    request(app)
      .get('/nivel/10')
      .expect(404, done);
  });

    it('Rotorna codigo de status 404 para a rota para o desafio 976', function(done) {
    request(app)
      .get('/desafio/976')
      .expect(404, done);
  });

});

// Testes para tratar respostas corretas
// describe('Faz requisicoes HTTP POST com respostas CORRETAS para o desafio 1 ("Scrum")', function() {

//   it('Retorna codigo de status 201', function(done) {
//     request(app)
//       .post('/desafio/1/checa-resposta')
//       .send('resposta=Corridas')
//       .expect(201, done);
//   });

//   it('Retorna ID 1 para resposta "Corridas"', function(done) {
//     request(app)
//       .post('/desafio/1/checa-resposta')
//       .send('resposta=Corridas')
//       .expect({"resposta": "Corridas", "id": 1}, done);
//   });

//   it('Retorna ID 2 para resposta "Mestre do Scrum"', function(done) {
//     request(app)
//       .post('/desafio/1/checa-resposta')
//       .send('resposta=Mestre+do+Scrum')
//       .expect({"resposta": "Mestre do Scrum", "id": 2}, done);
//   });

//   it('Retorna ID 3 para resposta "Dono do Produto"', function(done) {
//     request(app)
//       .post('/desafio/1/checa-resposta')
//       .send('resposta=Dono+do+Produto')
//       .expect({"resposta": "Dono do Produto", "id": 3}, done);
//   });

//   it('Retorna ID 4 para resposta "Time"', function(done) {
//     request(app)
//       .post('/desafio/1/checa-resposta')
//       .send('resposta=Time')
//       .expect({"resposta": "Time", "id": 4}, done);
//   });

//   it('Retorna ID 5 para resposta "Fluxo de Processo"', function(done) {
//     request(app)
//       .post('/desafio/1/checa-resposta')
//       .send('resposta=Fluxo+de+Processo')
//       .expect({"resposta": "Fluxo de Processo", "id": 5}, done);
//   });

//   it('Retorna ID 6 para resposta "Reuniões Diárias"', function(done) {
//     request(app)
//       .post('/desafio/1/checa-resposta')
//       .send('resposta=Reuniões+Diárias')
//       .expect({"resposta": "Reuniões Diárias", "id": 6}, done);
//   });

//   it('Retorna ID 7 para resposta "Revisão"', function(done) {
//     request(app)
//       .post('/desafio/1/checa-resposta')
//       .send('resposta=Revisão')
//       .expect({"resposta": "Revisão", "id": 7}, done);
//   });

// });

// Testes para tratar respostas erradas
// describe('Faz requisicoes HTTP POST com respostas ERRADAS para o desafio 1 do nivel 1 ("Scrum")', function() {

//   it('Retorna codigo de status 201', function(done) {
//     request(app)
//       .post('/desafio/1/checa-resposta')
//       .send('resposta=Análise+de+Risco')
//       .expect(201, done);
//   });

//   it('Retorna ID -1 para resposta "Análise de Risco"', function(done) {
//     request(app)
//       .post('/desafio/1/checa-resposta')
//       .send('resposta=Análise+de+Risco')
//       .expect({"resposta": "", "id": -1}, done);
//   });

//   it('Retorna ID -1 para resposta "Fluxo de Dados"', function(done) {
//     request(app)
//       .post('/desafio/1/checa-resposta')
//       .send('resposta=Fluxo+de+Dados')
//       .expect({"resposta": "", "id": -1}, done);
//   });

// });

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
      .expect({"id": 1, "username": "admin", "nome": "Administrador", "isSuccessful": true}, done);
  });

  it('Retorna mensagem de sucesso para login do usuario "jlennon" e senha "12345"', function(done) {
    request(app)
      .post('/login')
      .send('username=jlennon&password=12345')
      .expect({"id": 2, "username": "jlennon", "nome": "John Lennon", "isSuccessful": true}, done);
  });

  it('Retorna mensagem de sucesso para login do usuario "pmacca" e senha "12345"', function(done) {
    request(app)
      .post('/login')
      .send('username=pmacca&password=12345')
      .expect({"id": 3, "username": "pmacca", "nome": "Paul McCartney", "isSuccessful": true}, done);
  });

  it('Retorna mensagem de sucesso para login do usuario "harrison" e senha "12345"', function(done) {
    request(app)
      .post('/login')
      .send('username=harrison&password=12345')
      .expect({"id": 4, "username": "harrison", "nome": "George Harrison", "isSuccessful": true}, done);
  });

  it('Retorna mensagem de sucesso para login do usuario "ringo" e senha "12345"', function(done) {
    request(app)
      .post('/login')
      .send('username=ringo&password=12345')
      .expect({"id": 5, "username": "ringo", "nome": "Ringo Starr", "isSuccessful": true}, done);
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
      .expect({"id": -1, "username": "", "nome": "", "isSuccessful": false}, done);
  });

  it('Retorna mensagem de erro para login do usuario "mikelove" e senha "12345"', function(done) {
    request(app)
      .post('/login')
      .send('username=mikelove&password=12345')
      .expect({"id": -1, "username": "", "nome": "", "isSuccessful": false}, done);
  });

});