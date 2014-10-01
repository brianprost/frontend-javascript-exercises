module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var bigString = bigString.substring(startA, endA);
  var bigString = bigString += bigString.substring(startB, endB);
};

module.exports.findFirstMatch = function(text, searchString) {
  text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {

};

module.exports.substringBetweenMatches = function(text, searchString) {

};