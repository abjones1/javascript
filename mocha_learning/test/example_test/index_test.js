const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Setup
      const expected = 'cock-a-doodle-doo!';
      // Exercise
      const actual = Rooster.announceDawn();
      // Verify
      assert.equal(actual, expected);
      // Teardown - not needed
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // Setup
      const timeNumber = 12;
      const expected = timeNumber.toString();
      // Exercise
      const actual = Rooster.timeAtDawn(timeNumber);
      // Verify
      assert.equal(actual, expected);
      // Teardown - not needed
    });
    it('throws error for hour above 23', () => {
      // Setup
      const highHour = 24;
      const expected = RangeError;
      // Exercise
      const actual = () => {
        Rooster.timeAtDawn(highHour);
      }
      // Verify
      assert.throws(actual, expected);
      // Teardown - not needed      
    });
    it('throws error for hour below 0', () => {
      // Setup
      const lowHour = -1;
      const expected = RangeError;
      // Exercise
      const actual = () => {
        Rooster.timeAtDawn(lowHour);
      }
      // Verify
      assert.throws(actual, expected);
      // Teardown - not needed      
    });
  });
});