

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}


const declineEverything = (arr) => {
    arr.forEach(politelyDecline); // Itera sobre cada elemento del array y llama a politelyDecline para cada elemento. El array se pasa como argumento a politelyDecline.
}


const acceptEverything = (arr) => {
    // Itera sobre cada elemento del array e imprime un mensaje aceptándolo
    arr.forEach(veg => console.log(`Ok, I guess I will eat some ${veg}.`))
}


declineEverything(veggies);

acceptEverything(veggies);
