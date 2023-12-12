
const modelo = "seat"
const tipo = "ibiza"


const coche = (modelo, tipo) => {
    return {
        modelo: modelo,
        tipo: tipo,
    };
};

const miCoche = coche(modelo, tipo);
console.log(miCoche);


