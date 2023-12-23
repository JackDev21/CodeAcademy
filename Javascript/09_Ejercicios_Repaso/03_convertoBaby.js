
const convertToBaby = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(`baby ${array[i]}`);
    }
    return newArray;
}



const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))




// array in reverse order


const convertToBaby2 = (array) => {
    const newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(`baby ${array[i]}`);
    }
    return newArray;
}


console.log(convertToBaby2(animals))


