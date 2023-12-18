const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numList) {
	var total = 0;
  for(number in numList){
    total += numList[number];
  };
  return total;
};

const multiply = function(numList) {
  var total = 1;
  for(number in numList){
    total *= numList[number];
  }
  return total;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  var total = 1;
  if (a ===0) {
    return 1;
  } else {
    while(a>=1){
      total *=a
      a -= 1;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
