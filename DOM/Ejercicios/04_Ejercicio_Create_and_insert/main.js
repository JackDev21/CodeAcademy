// Crea un nuevo elemento de tipo 'li' (list item) y lo almacena en la variable 'newAttraction'
let newAttraction = document.createElement("li");

// Asigna un identificador (id) 'vespa' al nuevo elemento 'li'
newAttraction.id = "vespa";

// Establece el contenido HTML interno del nuevo elemento 'li' a 'Rent a Vespa'
newAttraction.innerHTML = "Rent a Vespa";

// Busca el elemento con el identificador 'italy-attractions' en el documento
// y añade el nuevo elemento 'li' como un hijo al final de este elemento
document.getElementById("italy-attractions").appendChild(newAttraction);