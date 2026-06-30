function getLargest(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        flag = false;
        break;
      }
    }

    if (flag == true) return i;
  }

  return -1;
}

let arr = [10, 5, 20, 8]
let index = getLargest(arr)
console.log(`index = ${index}`)
console.log(`largest number in ${arr} is ${arr[index]}`)