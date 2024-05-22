function mostratTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`)
}

setTimeout(mostratTema, 3000, "Node.js")



function sumar(a, b) {
  console.log(a + b)
}

setTimeout(sumar, 1000, 5, 5)