/*const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
    let results = [];
      // The 'outer' for loop - loops through each element in the array
    for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            i = 1;
            while (i < number) {
                  i = i * 2;
            }
            results.push(i);
    }
    return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]*/



const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
    let results = [];
    // The 'outer' for loop - loops through each element in the array
    for (let i = 0; i < arr.length; i++) {
        number = arr[i];
        console.log(number)



        // The 'inner' while loop - searches for smallest power of 2 greater than the given number
        x = 1;
        while (x < number) {
            x = x * 2;
        }
        results.push(x);
    }
    return results
}

console.log(smallestPowerOfTwo(numbers))
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

// Bucle anidados con la misma variable "i" se modifica por "x"