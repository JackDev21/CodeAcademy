let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';
let storyWords = story.split(' '); // Separa el párrafo en palabras y las guarda en un array llamado storyWords.

let unnecessaryWord = 'literally'; // Palabra que se considera innecesaria.
let misspelledWord = 'beautifull'; // Palabra mal escrita.
let badWord = 'freaking'; // Palabra considerada inapropiada.

console.log(storyWords)

let count = 0; // Variable para almacenar la cantidad de palabras.
storyWords.forEach(() => { // Recorre cada palabra en storyWords para contarlas.
    count = count + 1; // Incrementa el contador de palabras.
});
console.log(count); // Imprime la cantidad de palabras en el párrafo.

storyWords = storyWords.filter((word) => { // Filtra las palabras innecesarias.
    return word !== unnecessaryWord;
});

console.log(storyWords)



storyWords = storyWords.map((word) => { // Reemplaza la palabra mal escrita con la versión correcta.
    if (word === misspelledWord) {
        return "beautiful";
    }
    return word;
});




let badWordIndex = storyWords.findIndex((word) => { // Encuentra la posición de la palabra considerada inapropiada.
    return badWord === word;
});
console.log(badWordIndex); // Imprime el índice de la palabra considerada inapropiada.

storyWords[78] = "really"; // Reemplaza la palabra considerada inapropiada en la posición 78 por "really".

let lengthCheck = storyWords.every((word) => { // Verifica si todas las palabras tienen una longitud menor o igual a 10 caracteres.
    return word.length <= 10;
});
console.log(lengthCheck); // Imprime si todas las palabras cumplen con la condición de longitud.

storyWords = storyWords.forEach((word) => { // Imprime las palabras que tienen más de 10 caracteres.
    if (word.length >= 10) {
        console.log(word);
    }
});



