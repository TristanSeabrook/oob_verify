let assert =    require('assert').strict;
let datetime =  require('../app/datetime');

let datetimeFormat = new RegExp(/\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}/);
let date = new Date();
let currentYear = date.getFullYear();

describe('datetime', function() {
  it('Should return a string.', function() {
    assert.strictEqual('string', typeof datetime());
  });

  it('Returned string should be in timestamp format.', function() {
    assert.strictEqual(datetime(), datetime().match(datetimeFormat)[0]);
  });

  it('Returned string should contain the current year.', function() {
    assert.strictEqual(currentYear.toString(), datetime().match(currentYear)[0]);
  });
});
