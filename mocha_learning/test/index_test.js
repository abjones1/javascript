const assert = require('assert');

describe('math', () => {
    describe('max', () => {
        it('returns the largest number in a set of numbers', () => {
            // some test goes here
            const numberSet = [1, 2, 3, 4, 10];
            const maximum = Math.max(...numberSet);

            assert.ok(maximum === 10);
        });
    });
});