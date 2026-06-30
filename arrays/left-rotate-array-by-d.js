function LeftRotateOne(arr, n) {
  let temp = arr[0];

  for (let i = 0; i < n; i++) {
    arr[i - 1] = arr[i];
  }

  arr[n - 1] = temp;
}

function leftRotate(arr, d, n) {
  for (let i = 0; i < d; i++) {
    LeftRotateOne(arr, n)
  }
}

let arr = [1, 2, 3, 4, 5]
let n = 5;
let d = 2;

console.log(`before left rotation -> ${arr}`)
leftRotate(arr, d, n)
console.log(`after left rotation -> ${arr}`)