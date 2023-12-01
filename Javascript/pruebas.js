function contarOvejas(ovejas) {
    const ovejasFiltradas = ovejas.filter(oveja => {
        // Convertimos el nombre a minúsculas y quitamos los espacios
        const nombre = oveja.name.toLowerCase().replace(/\s/g, '');

        // Verificamos si el nombre contiene ambas letras 'a' y 'n'
        const contieneA = nombre.includes('a');
        const contieneN = nombre.includes('n');
        const contieneAmbasLetras = contieneA && contieneN;

        // Verificamos si el color es 'rojo'
        const esRojo = oveja.color.toLowerCase() === 'rojo';

        // Retornamos true si cumple ambas condiciones
        return contieneAmbasLetras && esRojo;
    });

    return ovejasFiltradas;
}

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
];

const ovejasFiltradas = contarOvejas(ovejas);
console.log(ovejasFiltradas);
