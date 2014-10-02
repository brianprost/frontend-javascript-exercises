module.exports.equalStrings = function(stringOne, stringTwo) {
  var testString = stringOne == stringTwo;
  return testString;
};

module.exports.notEqual = function(one, two) {
  var testString = one !== two;
  return testString; 
  /* couldn't you also do this?

    var testString = one === two;
    return !testString;

    I tried it before this and it passed the mocha test.. */
};

module.exports.inBetween = function(lower, middle, upper) {
  var testString = lower < middle && middle < upper;
  return testString;
};

module.exports.outsideRanges = function(number) {
  var testString = (10 < number && number < 20) && (42 <= number && number < 75) && (1 <= number && number <= 6);
  return testString;
};

module.exports.nameAndPrice = function(name, price) {

};