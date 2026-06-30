function reverse(arr, low, high) {
  while (low < high) {
    [arr[high], arr[low]] = [arr[low], arr[high]]

    low++;
    high--;
  }
}

function leftRotate(arr, d, n) {
  reverse(arr, 0, d - 1)
  reverse(arr, d, n - 1)
  reverse(arr, 0, n - 1)
}

let arr = [1, 2, 3, 4, 5]
let n = 5;
let d = 2;

console.log(`before left rotation -> ${arr}`)
leftRotate(arr, d, n)
console.log(`after left rotation -> ${arr}`)