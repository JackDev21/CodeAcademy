const fs = require('node:fs/promises') //  Se usa promise para manejar asincronia

console.log('Leyendo el primer archivo...')

const text = fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto', text)
  })


console.log('----> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')

const secondText = fs.readFile('./archivo2.txt', 'utf-8')
  .then(secondText => {
    console.log('segundo texto', secondText)
  })



// Ha hecho de forma secuencial la lectura del archivo. Aqui entraría la asincronia. readFileSync() es sincrono y readFile() es asincrono.