module.exports.newArray = function(a,b,c,d) {
  return [a,b,c,d];
};

module.exports.firstAndLast = function(array) {
  var newArray = [array[0], array[array.length - 1]];
  return newArray;
};