//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. 
//Otherwise, return "there is no 7 in the array".

function sevenBoom(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.toString().includes(7)) {
      return "Boom!";
    } else {
      return "there is no 7 in the array";
    }
  }
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));
