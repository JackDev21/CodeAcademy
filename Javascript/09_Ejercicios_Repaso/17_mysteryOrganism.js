// Devuelve una cadena aleatoria de bases de ADN
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Devuelve una cadena de ADN de 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};



const pAequorFactory = (numero, array) => {
  return {
    specimenNum: numero, // Número de muestra del organismo
    dna: array, // Secuencia de ADN del organismo

    mutate() {
      let indiceBaseAleatoria = Math.floor(Math.random() * this.dna.length); // Generar un número aleatorio entre 0 y el número de bases de ADN
      let nuevaBase = returnRandBase(); // Generar una nueva base aleatoria de ADN

      // Asegurarse de que la nueva base sea diferente a la base actual en la secuencia de ADN
      while (this.dna[indiceBaseAleatoria] === nuevaBase) {
        nuevaBase = returnRandBase(); // Generar una nueva base aleatoria de ADN y asegurarse de que sea diferente a la base actual en la secuencia de ADN
      }

      this.dna[indiceBaseAleatoria] = nuevaBase;
      return this.dna; // Devolver la secuencia de ADN mutada
    },
    compareDNA(pAequor) { // Comparar dos secuencias de ADN
      let commonBases = 0;

      for (let i = 0; i < this.dna.length; i++) { // Recorrer la secuencia de ADN del organismo
        if (this.dna[i] === pAequor.dna[i]) {  // Comparar la secuencia de ADN del organismo con la secuencia de ADN de otro organismo
          commonBases++;  // Incrementar el número de bases comunes
        }
      }

      const percentage = ((commonBases / this.dna.length) * 100).toFixed(2); // Calcular el porcentaje de bases comunes entre la secuencia de ADN del organismo y la secuencia de ADN de otro organismo
      console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common.`); // Imprimir el porcentaje de bases comunes
    },
    willLikelySurvive() { // Determinar si un organismo probablemente sobrevive
      const countCG = this.dna.filter(base => base === 'C' || base === 'G').length; // Contar el número de bases 'C' y 'G' en la secuencia de ADN
      const percentageCG = (countCG / this.dna.length) * 100; // Calcular el porcentaje de bases 'C' y 'G' en la secuencia de ADN
      return percentageCG >= 60; // Devolver true si el porcentaje de bases 'C' y 'G' es mayor o igual a 60, de lo contrario, devolver false.

    }
  };
}

// Función para crear instancias de pAequor que cumplan con la condición de supervivencia
const createInstances = () => {
  const instances = [];
  let instanceCount = 1;

  while (instances.length < 30) {
    const newOrganism = pAequorFactory(instanceCount, mockUpStrand());
    if (newOrganism.willLikelySurvive()) {
      instances.push(newOrganism);
    }
    instanceCount++;
  }

  return instances;
};

const newOrganism = pAequorFactory(1, mockUpStrand()); // Crear un organismo
console.log(newOrganism.dna); // Mostrar la secuencia de ADN inicial
newOrganism.mutate(); // Mutar el ADN
console.log(newOrganism.dna); // Mostrar la secuencia de ADN mutada

// Crear otro organismo para comparar ADN
const anotherOrganism = pAequorFactory(2, mockUpStrand());
newOrganism.compareDNA(anotherOrganism); // Comparar ADN entre los dos organismos
console.log(newOrganism.willLikelySurvive()); // Verificar si el organismo probablemente sobrevivirá




// Crear 30 instancias de pAequor que puedan sobrevivir y almacenarlas en una matriz
const studyInstances = createInstances();

// Mostrar la matriz de instancias para su estudio
console.log(studyInstances);
