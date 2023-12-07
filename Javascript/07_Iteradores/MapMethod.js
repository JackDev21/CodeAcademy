/*El método `.map()` ejecuta una función de devolución de llamada en cada elemento de un array. Retorna un nuevo array compuesto por los valores devueltos 
por la función de devolución de llamada.

El array original no se modifica y el array retornado puede contener elementos diferentes al array original.

En el ejemplo de código anterior, el método `.map()` se utiliza para agregar la cadena ' se unió al concurso.' al final de cada elemento en el array `finalParticipants`.*/

const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// add string after each final participant
const announcements = finalParticipants.map(member => {
    return member + ' joined the contest.';
})

console.log(announcements);