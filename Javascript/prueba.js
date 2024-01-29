const assert = require('assert').assert;
const Rooster = require('../index); 

describe('Rooster', () => {
    describe('announceDawn', () => {
        it('returns a rooster call', () => {

            //setup
            const expected = 'cock-a-doodle-doo!'
            //Exercise
            const actual = Rooster.announceDawn();
            //verify
            assert.equal(actual, expected)
        });
    });
});