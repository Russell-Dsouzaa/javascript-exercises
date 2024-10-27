const add = function(a,b) {
  return (a + b);
};

const subtract = function(a,b) {
	return (a - b);
};

const sum = function(array) {
	return array.reduce((total,currentElement) => {
    return total += currentElement;
  },0);
};

const multiply = function(array) {
  return array.reduce((total,currentElement) => {
    return total *= currentElement;
  },1);
};

const power = function(a,b) {
  let result = 1;

  for (let i=0; i < b; i++) {
    result *= a;
  }

  return result;
};

const factorial = function(num) {
  let result = 1;

  while (num !== 0) {    // I initially had num !== 1 conditional in the while loop, but in the first case, where num=0, the while ran infinitely, hence I had to change the conditional statement to num !== 0
    result *= num;
    num--;
  }

  return result;
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
