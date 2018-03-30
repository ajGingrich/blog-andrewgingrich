const chai = require('chai');
const chaiHttp = require('chai-http');
// const asset = require('assert');
const server = require('../server/server').server;
// const should = chai.should();
const port = 4080

chai.use(chaiHttp);

describe('server', function() {
  before(done => {
    server.listen(port);
    done()
  });
})
