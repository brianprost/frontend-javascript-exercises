module.exports.addItem = function (arg1, arg2) {
  ﻿if (arg1 == arg2[0] || arg1 == arg2[1] || arg1 == arg2[2] || arg1 == arg2[3]) /*does it really have to be that long, or is there a more efficient way to do it? */ {
    return arg2;
  }
  else {
    arg2.push(arg1);
    return arg2;
  }
}

module.exports.reverseSortedList = function (anArray) {
  
  var newArray = anArray.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    else if (a < b) {
      return 1;
    }
    else if (a == b) {
      return 0;
    }
  });

  return newArray;
}