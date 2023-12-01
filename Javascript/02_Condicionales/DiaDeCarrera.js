let raceNumber = Math.floor(Math.random() * 1000);

let registro = true
let edadCorredor = "20"


if (edadCorredor > 18 && registro) {
    raceNumber = raceNumber + 1000
}

if (edadCorredor > 18 && registro) {
    console.log(`${raceNumber} Salida a las 09:30 a.m.`)
} else if (edadCorredor > 18 && registro) {
    console.log(`${raceNumber} Salida a las 11:00 a.m.`)
} else if (edadCorredor < 18) {
    console.log(`${raceNumber} Salida a las 12:30 p.m.`)
} else {
    console.log(`Vaya al mostrador de registro.`)
}




