function insert(arr, position, element) {
    for (let index=arr.length; index > position; index--) {
        arr[index] = arr[index - 1]
    };

    arr[position] = element
}

let arr = [1,3,4,5]
console.log(`before insertion -> ${arr}`)
insert(arr, 1, 2)
console.log(`after insertion -> ${arr}`)