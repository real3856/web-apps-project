var assert = require('assert');
var subject = require('../app.js')

describe('PianoPitch', function () {

    beforeEach(function () {
        piano = new subject.Piano();
    });
    it('high', function () {
        piano.mode = 10;
        piano.highPitch();
        assert.equal(piano.mode, 1);
    })
    it('normal', function () {
        piano.mode = 10;
        piano.normalPitch();
        assert.equal(piano.mode, 0);
    })
    it('low', function () {
        piano.mode = 10;
        piano.lowPitch();
        assert.equal(piano.mode, -1);
    })
})
