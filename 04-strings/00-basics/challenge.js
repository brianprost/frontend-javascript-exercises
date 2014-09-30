module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  // this is where I'm beginning to have trouble
  return bigString.substring(startA, endA);
};

module.exports.findFirstMatch = function(text, searchString) {

};

module.exports.findLastMatch = function(text, searchString) {

};

module.exports.substringBetweenMatches = function(text, searchString) {

};