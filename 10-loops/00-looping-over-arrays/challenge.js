module.exports.sumNumbers = function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
    if (inputString.indexOf(',') === -1) {
        inputString = inputString.toLowerCase().split();
    } else {
        inputString = inputString.split(',');
        for (var i = 0; i < inputString.length; i++) {
            inputString[i] = inputString[i].toLowerCase();
        }
    }
    return inputString;
};

module.exports.addIndex = function(array) {
    var newArray = [];
    for (var index in array) {
        newArray[index] = index + ' is ' + array[index];
    }
    return newArray;
};
