const palindromes = function (string) {
    let alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
    let lowerCase = string.toLowerCase().split('');
    let filtered = lowerCase.filter((element) => {
        return alphanumeric.includes(element);
    });
    filtered =  filtered.join('');

    // for (let i=0; i < string.length; i++) {
    //     if (string[i].toLowerCase() !== string[string.length-(i+1)].toLowerCase()) {
    //         return false;
    //     }
    // }

    const reversedString = filtered.split('').reverse().join('');

    return reversedString == filtered;
};

// Do not edit below this line
module.exports = palindromes;
