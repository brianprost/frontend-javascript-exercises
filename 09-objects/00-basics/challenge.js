var pricingTable = {
  "Macbook Air": 999,
  "Macbook Pro": 1299,
  "Mac Pro": 2499,
  "Apple Sticker": 1
}

module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var courseInfo = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  }
  return courseInfo;
};

module.exports.addProperty = function (object, newProp, newValue) {
  if (object != {newProp: ""}) {
    object[newProp] = newValue;
    return object;
  }
  else {
    return object;
  } 
};

module.exports.formLetter = function (theLetter) {
  var stringOutput = "Hello " + theLetter.recipient + ",\n\n" + theLetter.msg + "\n\nSincerely,\n" + theLetter.sender;
  return stringOutput;
};

module.exports.canIGet = function (item, money) {
  
  var appleStore = {
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1
  }
  
  return appleStore[item] <= money;
};