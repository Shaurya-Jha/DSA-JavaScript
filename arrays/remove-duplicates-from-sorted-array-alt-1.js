function removeDuplicatesAlt(arr) {
  let res = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[res - 1]) {
      console.log(`${arr[res]} = ${arr[i]}`)
      arr[res] = arr[i];
      res++
      console.log(`${res}\n\n`)
    }
  }

  return res;
}

let arr = [0, 20, 20, 30, 30, 30, 30]
console.log(`before removal duplicates -> ${arr}`)

let result = removeDuplicatesAlt(arr)
console.log(`after removal duplicates -> ${arr.splice(0, result)}`)