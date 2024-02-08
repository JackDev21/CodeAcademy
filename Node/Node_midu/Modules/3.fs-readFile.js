const fs = require('node:fs') // El module fs nos permite trabajar con archivos y directorios

console.log('Leyendo el primer archivo...')
//const text = fs.readFileSync('./archivo.txt', 'utf-8') // El método readFileSync() nos permite leer un archivo 
const text = fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // readFile() es asincrono y ejecutamos un callback para la asincronia 
    console.log(text)
})

console.log('----> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
//const secondText = fs.readFileSync('./archivo2.txt', 'utf-8') // El método readFileSync() nos permite leer un archivo 
const secondText = fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(secondText)
})



// Ha hecho de forma secuencial la lectura del archivo. Aqui entraría la asincronia. readFileSync() es sincrono y readFile() es asincrono.