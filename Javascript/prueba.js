let lista = ["objeto1", "      objeto2 ", "objeto3", "objeto4", "objeto5", "objeto6", "objeto7", "objeto8", "objeto9", "objeto10"];






let listaForEach = lista.map((objeto) => {
  let objetoTrimmed = objeto.trim()
  if (objetoTrimmed === ('objeto2')) {
    console.log(objetoTrimmed);
  }
})
