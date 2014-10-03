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
  var ThreeStringedArray = array[] // im not done with this part yet
}

module.exports.arrayQuantityPlusOne = undefined;