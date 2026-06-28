function remove(arr, element){
    // check if element exists in the array or not
    if (arr.indexOf(element) === -1) {
        return 'No such element exists in the array'
    }

    // create a new temporary empty arry
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i !== arr.indexOf(element)) {
            newArr.push(arr[i])
        }
    }

    return newArr;
}

let arr = [1,2,3,5]

console.log(arr)
console.log(`before deletion -> ${arr}`)
let deleteElementArr = remove(arr, 25)
console.log(`after deletion -> ${deleteElementArr}`)