// Write your code here:

const reverseArray = (array) => {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}


const reverseArray2 = (array2) => {
    const reversedArray2 = array2.reverse();
    return reversedArray2
}




// When you're ready to test your code, uncomment the below and run:
const sentence = ['sense.', 'make', 'all', 'will', 'This'];

console.log(reverseArray(sentence))
console.log(reverseArray2(sentence))
// Should print ['This', 'will', 'all', 'make', 'sense.'];


