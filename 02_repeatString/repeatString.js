const repeatString = function(word, num) {
    let string = "";
    for(let i=0;i<num;i++){
    string += word;
    }
    return string;
    };
    
    repeatString("st",4);

// Do not edit below this line
module.exports = repeatString;
