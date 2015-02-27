module.exports.reversePlusOne = function(array) {
    var reversed = array.reverse();
    reversed.unshift(1);
    return reversed;
};

module.exports.plusesEverywhere = function(array) {
    return array.join('+');
};

module.exports.arrayQuantityPlusOne = function(array) {
    return array.length + 1;
};