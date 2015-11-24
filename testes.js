var request = require('supertest'),
    app = require('./app');

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

    var listaNiveis = [
      {
        "numero": 1,
        "titulo": "",
        "isDisponivel": true,
        "desafiosCompletados": 1
      },
      {
        "numero": 2,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 3,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 4,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 5,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 6,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 7,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 8,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 9,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      }
    ];

    request(app)
      .get('/lista-niveis')
      .expect(listaNiveis, done);
  });
});