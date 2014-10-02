module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var string1 = bigString.substring(startA, endA);
  var string2 = bigString.substring(startB, endB);
  return string1 + string2;
};

module.exports.findFirstMatch = function(text, searchString) {
  var searchTerm = text.indexOf(searchString);
  return searchTerm;
};

module.exports.findLastMatch = function(text, searchString) {
  var searchTerm = text.lastIndexOf(searchString);
  return searchTerm;
};

module.exports.substringBetweenMatches = function(text, searchString) {
  var toStart = text.indexOf(searchString) + searchString.length;
  var toEnd = text.lastIndexOf(searchString);
  var result = text.substring(toStart, toEnd);
  return result;
};

/* Complete the substringBetweenMatches function. This function should:

Take two strings as arguments. The first string is the one to search, the second is the one to search for
Return the substring between the first match and the last match
Not include the first match or the last match in the returned substring For example:
findFirst("Roses are red, apples are really red.", "red") // returns ", apples are really " */