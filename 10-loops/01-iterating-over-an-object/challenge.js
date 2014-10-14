module.exports.getKeys = function (anObject) {
    // return Object.keys(anObject);
    // was this supposed to be a for - in loop? i think Object.keys does the same thing...?
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
    // http://stackoverflow.com/questions/675231/how-do-i-access-properties-of-a-javascript-object-if-i-dont-know-the-names
    // http://javascriptweblog.wordpress.com/2011/01/04/exploring-javascript-for-in-loops/
    
    var anArray = [];
    for (var keys in anObject) {
        anArray.push(keys)
    };
    return anArray;
};

module.exports.getValues = function (anObject) {
    // i know..i know...this isn't right! [-__-]
    var anArray = [];
    for (var property in anObject) { //uhhh... I'm supposed to return all of the keys too...
        anArray.push(property);
    }
    return anArray;
};

module.exports.objectToArray = function (anObject) {
    
};