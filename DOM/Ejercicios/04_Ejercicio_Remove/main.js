// Encuentra y almacena en la variable 'elementToRemove' el elemento con el ID 'vespa'
let elementToRemove = document.getElementById('vespa');

// Busca el elemento con el ID 'italy-attractions' y elimina el elemento 'elementToRemove' de sus hijos
document.getElementById('italy-attractions').removeChild(elementToRemove);