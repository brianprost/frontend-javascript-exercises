module.exports.newArray = function (num1, num2, num3, num4) {
  var anArray = [num1, num2, num3, num4];
  return anArray;
};

module.exports.firstAndLast = function (arg1) {
  var lastIndex = arg1.length - 1;
  var aNewArray = [arg1[0], arg1[lastIndex]];
  return aNewArray;
}