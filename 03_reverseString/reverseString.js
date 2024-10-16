const reverseString = function(str) {
    var newstr = '';                                        // alternately, we could use, var newstr = str.split('').reverse().join('');

    for(let i = str.length - 1;i >= 0; i--) {
        newstr = newstr + str[i];                 
        // if we wrote, str[i] + newstr instead, it would return "hello". It's because it would append '' to the str var(which is "hello") instead of appending o, l, l, e, h to '' one by one
    }

    return newstr;
};

// Do not edit below this line
module.exports = reverseString;
