module.exports.favoriteNumber = function(fav, guess) {
    if (guess > fav) {
        return 'Too high';
    } else if (guess < fav) {
        return 'Too low';
    } else {
        return 'You got it!';
    }
};

module.exports.checkLock = function(a,b,c,d) {
    var aValue = a === 3 || a === 5 || a === 7,
        bValue = b === 2,
        cValue = (5 <= c) && (c <= 100),
        dValue = (d < 9) || (d > 20);
    if (aValue && bValue && cValue && dValue) {
        return 'correct';
    } else {
        return 'incorrect';
    }
};

module.exports.canIGet = function(item, money) {
    var mba     = 'MacBook Air',
        mbp     = 'MacBook Pro',
        mpro    = 'Mac Pro',
        sticker = 'Apple Sticker';

    if (item === mba) {
        if (money >= 999) {
            return true;
        } else {
            return false;
        }
    } else if (item === mbp) {
        if (money >= 1299) {
            return true;
        } else {
            return false;
        }
    } else if (item === mpro) {
        if (money >= 2499) {
            return true;
        } else {
            return false;
        }
    } else if (item === sticker) {
        if (money >= 1) {
            return true;
        } else {
            return false;
        }
    } else if (item != mba || item != mbp || item != mpro || item != sticker) {
        return false;
    }
};