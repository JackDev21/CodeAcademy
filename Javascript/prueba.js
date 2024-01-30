const Calculate = {
    factorial(factorialNumber) {
        let result = 1;
        for (let i = factorialNumber; i > 0; i--) {
            result = result * i;
        }
        return result
    }
}

console.log(Calculate.factorial(5))