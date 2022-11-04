const chai = require('chai');
const chaiHttp = require('chai-http');
const model = require('../../database/models');
const sinon = require('sinon');
const app = require('../../api/app');

chai.use(chaiHttp);

describe('routes consulta', () => {
  beforeEach(sinon.restore);

  describe('get /consulta', () => {
    it('deve retornar 404', async () => {
      sinon.stub(model.processos, 'findOne').resolves();
      const response = await chai.request(app)
      .get('/consulta/"9999999-99.9999.9.99.9999"');
      chai.expect(response.status).to.equal(404);

    });
  });
  describe('get /consulta valido', () => {
    it('deve retornar 200', async () => {
      sinon.stub(model.processos, 'findOne').resolves({});
      const response = await chai.request(app)
        .get('/consulta/1008126-92.2015.8.26.0132')
        chai.expect(response.status).to.equal(200);
    });
  });
});