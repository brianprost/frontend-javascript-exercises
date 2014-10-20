module.exports.stream = function (conditionalFn, actionFn) {
    while (conditionalFn()) {
        actionFn();
    }
};

module.exports.sumNumbers = function (anArray) {
    var total = 0;
    
    var count = 0;
    
    while (count < anArray.length) {
        total += anArray[count];
        count++;
    }
    
    return total;
};
