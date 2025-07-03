//first function
function findEvenIndex(arr) {
  if (arr.every((num) => num == 0)) return 0;

  for (let i = 0; i < arr.length; i += 1) {
    const newArr = [...arr];
    newArr.splice(i, 1); // [2]
    let left = newArr.splice(0, i).reduce((tandin, b) => tandin + b, 0);
    let right = newArr.reduce((tandin, b) => tandin + b, 0);

    if (left == right) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // [4,3,2,1]

// second function
function productArray(numbers) {
  //your code here
  let result = [];
  numbers.forEach((num, index) => {
    const array = [...numbers];
    array.splice(index, 1);
    let value = array.reduce((a, n) => a * n, 1);
    result.push(value);
  });
  return result;
}

//third function
function sumArray(array) {
  let higest = Math.max(...array);
  let lowest = Math.min(...array);
  let sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let result = sum - higest - lowest;
  return result;
}
console.log(sumArray([2, 1, 3, 5, 6, 10, 9]));

//fourth function
const rps = (p1, p2) => {
  if (
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "rock" && p2 === "scissors")
  ) {
    return "Player 1 won!";
  } else if (p1 === p2) {
    return "Draw!";
  } else {
    return "Player 2 won!";
  }
};
console.log(rps("paper", "scissors"));

// fifth function

function geometricSequenceElements(a, r, n) {
  const result = [];
  let answer = a;

  for (let i = 0; i < n; i += 1) {
    result.push(answer);
    answer *= r;
  }
  return result.join(", ");
}

//sixth function
function repeatStr(n, s) {
  return s.repeat(n);
}
console.log(repeatStr(3, "*"));

//seventh function
const fakeBin = (x) =>
  x
    .split("")
    .map((num) => (num >= 5 ? 1 : 0))
    .join("");
console.log(fakeBin("425361982736559238"));

//Finding Remainder Without Using '%' Operator
const remainder = (D, d) => {
  if (D / d == parseInt(D / d)) return 0;
  let i = 1;
  let product = d;
  while (D - product > d) {
    product = d * i;
    i++;
  }
  return D - product;
};

//Check if a triangle is an equable triangle!
function equableTriangle(a, b, c) {
  //area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  const perimeter = a + b + c;

  return area == perimeter;
}

//Selective fear of numbers
const AmIAfraid = function (day, num) {
  if (
    (day == "Monday" && num == 12) ||
    (day == "Tuesday" && num > 95) ||
    (day == "Wednesday" && num == 34) ||
    (day == "Thursday" && num == 0) ||
    (day == "Friday" && num % 2 == 0) ||
    (day == "Saturday" && num == 56) ||
    (day == "Sunday" && Math.abs(num) == 666)
  )
    return true;

  return false;
};

// Ghost color Class
class Ghost {
  constructor() {
    const colors = ["white", "yellow", "purple", "red"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
}
