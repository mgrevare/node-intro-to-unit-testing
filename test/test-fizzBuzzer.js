const should = require('chai').should();

const fizzbuzzer = require('../fizzBuzzer');


// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz if divisible by 3, buzz if divisible by 5, fizzbuzz if divisible by 15', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 42, expected: 'fizz'},
      {num: 15, expected: 'fizz-buzz'},
      {num: 33, expected: 'fizz'}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzbuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if arg not number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = 'a';
          fizzbuzzer(badInputs).should.throw(Error);
    });
});
