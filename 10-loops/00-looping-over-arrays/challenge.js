module.exports.sumNumbers = function (theArray) {
    var theSum = 0;
    for (var index = 0; index < theArray.length; index++) {
        theSum = theSum + theArray[index];
    }
    return theSum;
};

module.exports.splitAndLowerCaseString = function (inputString) {
    
    var arrayOfStrings = inputString.split(",")
    
    for (var a = 0; a < arrayOfStrings.length; a++) {
        arrayOfStrings[a] = arrayOfStrings[a].toLowerCase();
    }
    
    return arrayOfStrings;
};

module.exports.addIndex = function (inputStuff) {
    var newArray = [];
    
    for (var i = 0; i < inputStuff.length; i++) {
        newArray[i] = i + " is " + inputStuff[i];
    }
    
    return newArray;
};