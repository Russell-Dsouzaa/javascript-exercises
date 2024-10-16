const removeFromArray = function(arr1, ...element) {
    // var index = arr1.indexOf(element);

    // if(index !== (-1)) {
    //     arr1.splice(index,1);
    // }
    // return arr1;

    var newarr = [];

    for(let i = 0;i < arr1.length;i++) {
        if(!(element.includes(arr1[i]))) {
            newarr.push(arr1[i]);
        }
    }

    return newarr;
};

// Do not edit below this line
module.exports = removeFromArray;
