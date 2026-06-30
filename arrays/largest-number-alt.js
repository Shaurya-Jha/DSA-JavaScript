function getLargest(arr) {
  let n = arr.length;
  let res = 0;

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[res]) {
      res = i;
    }
  }

  return res;
}

let arr = [10, 5, 20, 8]

let index = getLargest(arr)

// another way to get the largest number from an array
// uses inbuilt Math module
let largestNumber = arr.reduce((a, b) => {
  return Math.max(a,b)
})

console.log(`largest number is ${largestNumber}`)

let newLargestNumber = arr.sort((a, b) => {
  return b - a;
})[0]

console.log(`another largest number in ${newLargestNumber}`)