const repeatString = function(str , num) {
    if(num < 0) return "ERROR";

    var newstr = '';
    for(let i = 0;i < num;i++) {
        newstr = str + newstr;
    }
    return newstr
};

// Do not edit below this line
module.exports = repeatString;
