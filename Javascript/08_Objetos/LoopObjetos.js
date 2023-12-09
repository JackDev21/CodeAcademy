// Definición de un objeto llamado 'spaceship' que contiene información sobre la tripulación de una nave espacial.
let spaceship = {
    // El objeto 'crew' contiene los roles de la tripulación como propiedades.
    crew: {
        captain: {
            name: 'Lily', // Nombre del capitán
            degree: 'Computer Engineering', // Titulación del capitán
            cheerTeam() { console.log('You got this!') } // Método para animar al equipo
        },
        'chief officer': {
            name: 'Dan', // Nombre del oficial jefe
            degree: 'Aerospace Engineering', // Titulación del oficial jefe
            agree() { console.log('I agree, captain!') } // Método para mostrar acuerdo con el capitán
        },
        medic: {
            name: 'Clementine', // Nombre del médico
            degree: 'Physics', // Titulación del médico
            announce() { console.log(`Jets on!`) } // Método para anunciar
        },
        translator: {
            name: 'Shauna', // Nombre de la traductora
            degree: 'Conservation Science', // Titulación de la traductora
            powerFuel() { console.log('The tank is full!') } // Método para verificar el estado del combustible
        }
    }
};

// Bucle 'for...in' para recorrer las propiedades del objeto 'crew' en 'spaceship'
for (let crewMembername in spaceship.crew) {
    // Imprime el nombre de cada miembro de la tripulación
    console.log(`${crewMembername}: ${spaceship.crew[crewMembername].name}`)
}

// Bucle 'for...in' para recorrer las propiedades del objeto 'crew' en 'spaceship' 
for (let crewMemberdegree in spaceship.crew) {
    // Imprime el nombre y la titulación de cada miembro de la tripulación
    console.log(`${spaceship.crew[crewMemberdegree].name}: ${spaceship.crew[crewMemberdegree].degree}`)
}
