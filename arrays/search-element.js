function search(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return i        // return element index position
        }
    }

    return -1;
}

const arr = [10,2,50,33]
find = 33
result = search(arr, find)
console.log('Index found for element 33 is: ', result)