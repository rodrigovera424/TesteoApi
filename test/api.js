//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('My APIS', () => {
    beforeEach((done) => { 
           done();
    });

    describe('/GET entries', () => {
        it('it should GET all the entries', (done) => {
        chai.request("http://localhost:3000/api")
            .get('/persona')
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
            });
        });
        it('it should GET one entry', (done) => {
            chai.request("http://localhost:3000/api")
                .get('/persona/1234')
                .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                });
            });        
    });

});