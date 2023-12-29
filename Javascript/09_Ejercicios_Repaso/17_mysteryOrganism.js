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



const pAequorFactory = (number, array) => {


  return {
    specimenNum: number,
    dna: array,
    mutate() {

    }
  }
}


console.log(pAequorFactory(1, mockUpStrand()))