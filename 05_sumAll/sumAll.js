const sumAll = function(first,second) {
    let sum =0;
    if(typeof first !== "number"|| typeof second !== "number"){
        return "ERROR";
    }
    else if(first < second && first>=0){
        for(i=first;i<=second;i++){
            sum+=i
        }
        return sum;
    }
    else if(first > second && second>=0){
        for(i=second;i<=first;i++){
            sum+=i
        }
        return sum;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
