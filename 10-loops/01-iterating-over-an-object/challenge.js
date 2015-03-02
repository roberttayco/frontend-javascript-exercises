module.exports.getKeys = function(object) {
    var arr = [];
    for (var property in object) {
        arr.push(property);
    }
    return arr;
};

module.exports.getValues = function(object) {
    var arr = [];
    for (var property in object) {
        arr.push(object[property]);
    }
    return arr;
};

module.exports.objectToArray = function(object) {
    var arr = [];
    for (var property in object) {
        arr.push(property + ' is ' + object[property]);
    }
    return arr;
};