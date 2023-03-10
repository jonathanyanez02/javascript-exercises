const reverseString = function (x) {

    let word = "";

    for (i = x.length - 1; i >= 0; i--) {
        word += x[i];


    }
    return word;

};

reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
