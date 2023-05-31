const expect = require('chai').expect;
const request = require('request');

describe('Testing search endpoint', function() {
   it('result', function(done) {
      request('http://localhost:3030/searchTest',
         function(error, response, body) {
            // A timeout is used because the test's default timeout is 2000ms which does not give the API enough time to respond therefore I extended it to 10000ms
            this.timeout = 10000;
            expect(response).not.to.be.undefined;
            done();
         })
   })
})