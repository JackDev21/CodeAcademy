// Write your code here:
const greetAliens = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(`Oh powerful ${array[i]}, we humans offer our unconditional surrender!`)
    }
}

// When you're ready to test your code, uncomment the below and run:
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);



// array in reverse order


const convertToBaby = (array) => {
    const newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(`baby ${array[i]}`);
    }
    return newArray;
}




const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))


