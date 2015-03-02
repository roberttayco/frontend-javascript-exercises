module.exports.stream = function(conditionalFn, actionFn) {
    while (conditionalFn()) {
        actionFn();
    }
};

module.exports.sumNumbers = function(arr) {
    var i   = 0,
        sum = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
};

