const howOld = (age, year) => {
    // calcular año actual.
    let fechaActual = new Date(); // Obtiene la fecha actual.
    let anoActual = fechaActual.getFullYear(); // Obtiene el año actual.

    // calcular diferencia año.
    const anoDiferencia = year - anoActual; // Calcula la diferencia entre el año proporcionado y el año actual.
    const edadCalculada = age + anoDiferencia; // Calcula la edad sumando la edad actual y la diferencia de años.

    // Comprueba diferentes situaciones basadas en el año proporcionado.
    if (year > anoActual) {
        // Si el año proporcionado es mayor que el año actual, devuelve un mensaje sobre la edad futura.
        return `You will be ${edadCalculada} in the year ${year}`;
    } else if (year < (anoActual - age)) {
        // Si el año proporcionado es menor que el año en el que la persona nació, calcula los años antes del nacimiento.
        const anosAntesNacimiento = anoActual - age - year;
        return `The year ${year} was ${anosAntesNacimiento} years before you were born`;
    } else {
        // Si el año proporcionado está entre el año de nacimiento y el año actual, muestra la edad en ese año.
        return `You were ${edadCalculada} in the year ${year}`;
    }
};

console.log(howOld(20, 2025));