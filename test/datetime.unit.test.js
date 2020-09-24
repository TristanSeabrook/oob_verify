let assert =    require('assert').strict;
let datetime =  require('../app/datetime');

let datetimeFormat = new RegExp(/\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}/);
let date = new Date();
let currentYear = date.getFullYear();
console.log(currentYear, datetime().match(currentYear)[0]);

describe('datetime', function() {
  it('Should return a string.', function() {
    assert.equal('string', typeof datetime());
  });
});

describe('datetime', function() {
  it('Should return a string in timestamp format.', function() {
    assert.equal(datetime(), datetime().match(datetimeFormat)[0]);
  });
});

describe('datetime', function() {
  it('Should return a string containing the current year.', function() {
    assert.equal(currentYear.toString(), datetime().match(currentYear)[0]);
  });
});
