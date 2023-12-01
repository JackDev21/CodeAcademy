// Creamos constante con la edad
const myAge = 30
// Creamos let porque el valor variará, con la variable earlyYears(2 primeros años son  10,5 por año) 
let earlyYears = 2
earlyYears = earlyYears * 10.5 // earlyYears *= 10,5

// por 4 para calcular el número de años de perro contabilizados por sus últimos años a partir de los 2 años.
let laterYears = myAge - 2
laterYears = laterYears * 4 // laterYears *= 4

console.log(laterYears)
console.log(earlyYears)


const myAgeInDogYears = earlyYears + laterYears

const myName = "Jack".toLowerCase()

console.log(`Mi nombre es ${myName}. Tengo ${myAge} años, que es ${myAgeInDogYears} en años de perro.`)
