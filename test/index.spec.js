
// index.spex.js

const expect = require('chai').expect;
//const server = require('../index');


describe('test', () => {
    it('should return a string', () => {
        expect('CI with Travis').to.equal('CI with Travis');
    });
});