function userinput(input) {
    return new Promise((resolve, reject) => {
      if (input) {
        resolve(`input received: ${input}`);
      } else {
        reject('no input provided');
      }
    });
  }
  
  const input = 'tarun';
  
  userinput(input)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  



//map
// map is a method which creates a new array of same length with 
// new values with which the operations are performed on each value
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

//
// filter() is a method which creates a new array 
// with the elements which pass through the condition

const arr1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 

//reduce
var arr3 = [1, 2, 3, 4, 5];

// Summing all the numbers in the array using reduce
//reduce is used to transform an array into single value by 
// applying the callback function to each element in the array
var sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: Sum: 15


