const reverseString = function(string) {
    stringArray = string.split("");
    let reverse = ""
    let stringSize = string.length;
    for(i=0; i<stringSize; i++) {
        let reverseLetter = stringSize - i - 1
        reverse =reverse + stringArray[reverseLetter];
        console.log(reverse);
    };
    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
