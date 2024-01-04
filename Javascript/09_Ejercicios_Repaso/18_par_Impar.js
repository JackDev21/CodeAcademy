
const arr = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez']

function removeEveryOther(arr) {

    let impar = []

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 === 0) {
            impar.push(arr[i])
        }
    }
    return impar
}

console.log(removeEveryOther(arr))





