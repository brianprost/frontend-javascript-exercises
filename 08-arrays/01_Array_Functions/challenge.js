module.exports.reversePlusOne = function(array) {
  if (array.length < 3) {
    var smallArray = [array[1], array[0]]
    smallArray.unshift(1);
    return smallArray;
  }
  else {
    var lastIndex = array.length - 1;
    var secondLastIndex = array.length - 2;
    var largeArray = [array[lastIndex], array[secondLastIndex], array[1], array[0]];
    largeArray.unshift(1);
    return largeArray;
  }
}

module.exports.plusesEverywhere = function (anArray) {
  var arraySize = anArray.length;
  if (arraySize < 3) {
    return anArray[0] + "+" + anArray[1];
  }
  else {
    return anArray[0] + "+" + anArray[1] + "+" + anArray[2] + "+" + anArray[3] + "+" + anArray[4];
  }
}

module.exports.arrayQuantityPlusOne = function (arrayOfNums) {
  return arrayOfNums.length + 1;
}