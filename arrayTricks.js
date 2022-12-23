const arr = [1,2,3,4,5,6,7,8,9]

// create a range of numbers
const range1 = Array(100).fill(0).map((_, i) => i + 1);
// OR
const range2 = [...Array(100).keys()];

// remove duplicates
const unique = [...new Set(arr)];

//get random element
const random = arr[Math.floor(Math.random() * arr.length)];

//loop over key-value pairs
for (const [i, val] of arr.entries()) {
    console.log(i, val);
}

//array methods to study

arr.forEach();
arr.map();
arr.filter();
arr.find();
arr.findIndex();
arr.reduce();


