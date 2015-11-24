var request = require('supertest'),
    app = require('./app');

describe('Faz requisicao para rota raiz', function() {
  it('Retorna codigo de status 200', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});