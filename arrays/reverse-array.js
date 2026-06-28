function reverse(arr) {
    // start from
    let low = 0
    // and at
    let high = arr.length - 1

    while (low < high) {
        let temp = arr[low];
        arr[low] = arr[high]
        arr[high] = temp;

        low++;
        high--;
    }
}

let arr = [1,2,3,4,5]

console.log(`before reverse -> ${arr}`)
reverse(arr)
console.log(`after reverse -> ${arr}`)