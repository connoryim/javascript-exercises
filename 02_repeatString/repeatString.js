function repeatString(phrase,num) {
    let returnString = "";
    let i = 0;
    if(num<0){
        return "ERROR";
    }
    while(i<num) {
        returnString = returnString + phrase;
        i++;
        console.log(returnString);
    }  
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
