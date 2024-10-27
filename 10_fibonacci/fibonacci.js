const fibonacci = function(num) {
    let firstNum = 0;
    let nextNum = 1;
    let result = 0;

    if (num == 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    } else if (num == 1) {
        return 1;
    }

    for (let i=2; i<=num; i++) {
        result = firstNum + nextNum;
        firstNum = nextNum;
        nextNum = result;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
