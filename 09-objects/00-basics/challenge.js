module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
    var course = {
        title: courseTitle,
        duration: courseDuration,
        students: courseStudents
    };
    return course;
};

module.exports.addProperty = function(object, newProp, newValue) {
    // if the `object` already has a property called `newProp`, just return `object`
    if (object.hasOwnProperty(newProp)) {
        return object;
    } else {
        // object.newProp
        // object["propertyName"] == object.propertyName
        object[newProp] = newValue;
        return object;
    }
};

module.exports.formLetter = function(letter) {
    return 'Hello ' + letter.recipient + ',\n\n' + letter.msg + '\n\nSincerely,\n' + letter.sender;
};

module.exports.canIGet = function(item, money) {
    var items = {
        'MacBook Air': 999,
        'MacBook Pro': 1299,
        'Mac Pro': 2499,
        'Apple Sticker': 1
    };
    return items[item] <= money;
    /*
        var item = {
            'MacBook Air': 999
        };

        return typeof item[item] === "undefined" ? false : item[item] <= money;
    */

    // does the item provided match a property name on the object
    // item[item]
    // item.hasOwnProperty(item)

    /*
        if (items[item]) {
            // return true if in price range
        } else {
            return false;
        }
    */
};