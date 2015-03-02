module.exports.copy = function(object) {
    var newObj = {};
    for (var property in object) {
        newObj[property] = object[property];
    }
    return newObj;
};

module.exports.extend = function(dest, src) {
    var newDest = dest;
    for (var property in src) {
        newDest[property] = src[property];
    }
    return newDest;
};

module.exports.hasElems = function(obj, arr) {
    var i = 0,
        result = true;
    while (i < arr.length) {
        if (!obj.hasOwnProperty(arr[i])) {
            result = false;
            break;
        }
        i++;
    }
    return result;
};