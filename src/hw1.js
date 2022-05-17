//function that takes a number and doubles it
// yarn jest -t 'test doubleNumber'
const doubleNumber = (num) => {
  return num * 2;
};

/// function that takes a number and returns 'odd' or 'even'
// yarn jest -t 'test isOddOrEven'
const isOddOrEven = (num) => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
};

//function that return a random number 0-5
// yarn jest -t 'test randomNumber'
const randomNumber = () => {
  return Math.floor(Math.random() * 6);
};

/// function that takes two numbers num and 'opp'
/// opp can be +, -, /, or *
// yarn jest -t 'test calc'
const calc = (num1, num2, opp) => {
  switch(opp) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
};

//function that takes a string and return the number of vowels it has
// *lowercase only, and never count y
// yarn jest -t 'test vowelCount'
const vowelCount = (str) => {
  let numVowels = 0;
  let letters = str.split('');
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === 'a') {
      numVowels ++;
    } 
    else if (letters[i] === 'e') {
      numVowels++;
    }
    else if (letters[i] === 'i') {
      numVowels++;
    }
    else if (letters[i] === 'o') {
      numVowels++;
    }
    else if (letters[i] === 'u') {
      numVowels++;
    }
  }

  return numVowels;
};

/// function that takes an array of numbers and returns sum
// yarn jest -t 'test getSum'
const getSum = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

/// function that takes an array of numbers and returns highest num
// yarn jest -t 'test getHighNum'
const getHighNum = (numbers) => {
  let highNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highNum) {
      highNum = numbers[i];
    }
  }

  return highNum;
};
/// function that takes an array of numbers and returns lowest num
// yarn jest -t 'test getLow'
const getLowNum = (numbers) => {
  let lowNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < lowNum) {
      lowNum = numbers[i];
    }
  }

  return lowNum;
};
/// function that takes an array of numbers and returns true if sorted (low to high only)
// yarn jest -t 'test isSorted'
const isSorted = (numbers) => {
  let firstNumIndex = 0;
  let secondNumIndex = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[secondNumIndex] - numbers[firstNumIndex] >= 0) {
      firstNumIndex++;
      secondNumIndex++;
    }
  }
  if (secondNumIndex === numbers.length) {
    return true;
  }
  else {
    return false;
  }
};

//  write a function that takes a number (0-100)
//  return 'fizz' if only divisible by 3
//  return 'buzz' if only divisible by 5
//  return 'fizzbuzz' if divisible by  3 and 5
//  return the number if none apply
// yarn jest -t 'test fizzbuzz'
const fizzbuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
    }
    else if (num % 3 === 0) {
      return 'fizz';
    }
    else if (num % 5 === 0) {
      return 'buzz';
    }
    else {
      return num;
    }
};

module.exports = {
  doubleNumber,
  vowelCount,
  isOddOrEven,
  calc,
  getHighNum,
  getLowNum,
  getSum,
  isSorted,
  fizzbuzz,
  randomNumber,
};