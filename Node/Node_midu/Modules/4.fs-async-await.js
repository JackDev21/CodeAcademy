const fs = require('node:fs/promises') //  Se usa promise para manejar asincronia

console.log('Leyendo el primer archivo...')

const text = await fs.readFile('./archivo.txt', 'utf-8')
console.log('primer texto', text)


console.log('----> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
//const secondText = fs.readFileSync('./archivo2.txt', 'utf-8') // El método sreadFileSync() nos permite leer un archivo 
const secondText = fs.readFile('./archivo2.txt', 'utf-8')
  .then(secondText => {
    console.log('segundo texto', secondText)
  })



