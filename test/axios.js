let strictEqual = require('assert');
let axios = require('axios');

describe("My APIS", function () {

    beforeEach((done) => { 
        done();
    });    

    describe('/GET entries', () => {    
        it("it should GET all the entries", async function () {

            const data = await axios.get("http://localhost:3000/api/persona");
            strictEqual(data.status, 200);
        });
    });    

});        
