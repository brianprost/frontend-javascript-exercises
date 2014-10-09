module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var courseInfo = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  }
  return courseInfo;
};

module.exports.addProperty = function (object, newProp, newValue) {
  object = {
    entry1: newProp,
    entry2: newValue
  }
};

module.exports.formLetter = undefined;

module.exports.canIGet = undefined;