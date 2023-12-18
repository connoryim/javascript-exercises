const fibonacci = function(number) {
    if (number < 1) {
        return "OOPS";
    }
    let fib =[1,1]
    for(i = 0; i < number; i++){
        fib[i+2] = fib[i] + fib[i+1];
    };
    console.log(fib);
    return fib[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
