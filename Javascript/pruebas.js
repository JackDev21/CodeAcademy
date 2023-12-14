// Write your function here:

const howOld = (age, year) => {
    // calcular año actual.
    let fechaActual = new Date();
    let anoActual = fechaActual.getFullYear();

    // calcular diferencia año.
    const anoDiferencia = year - anoActual
    const edadCalculada = age + anoDiferencia

    if (year > anoActual) {
        return `You will be ${edadCalculada} in the year ${year}`
    } else if (year < (anoActual - age)) {
        return `The year ${year} was ${anoDiferencia} years before you were born`
    } else {
        return `You were ${edadCalculada} in the year ${anoActual}`
    }

}


console.log(howOld(15, 1987))

// Once your function is written, write function calls to test your code!

