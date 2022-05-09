//単純なFizzBuzz

for (let i: number = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//全て1行に出力するFizzBuzz 回答

let result = "";

for (let i: number = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    result = result + " FizzBuzz";
  } else if (i % 3 === 0) {
    result = result + " Fizz";
  } else if (i % 5 === 0) {
    result = result + " Buzz";
  } else {
    result = result + ` ${i}`;
  }
}

console.log(result);

//全て1行に出力するFizzBuzz 模範解答

// let result = '';

// for (let i: number = 1; i <= 100; i++ ) {
//   if (i > 1) result+= ' ';

//   if (i % 3 === 0 && i % 5 === 0) {
//     result += 'FizzBuzz';
//   } else if (i % 3 === 0) {
//     result += 'Fizz';
//   } else if (i % 5 === 0) {
//     result += 'Buzz';
//   } else {
//     result += String(i);
//   }
// }

// console.log(result)
