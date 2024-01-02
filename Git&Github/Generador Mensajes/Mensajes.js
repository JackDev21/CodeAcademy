

const mensajesInspiradores = ["El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "El único límite para tus logros es tu propia imaginación.",
    "Cree en ti mismo y todo será posible."
]

const chistes = ["¿Por qué los programadores prefieren el café frío? Porque les gusta el Java helado.",
    "¿Por qué los programadores prefieren el día de la semana? Porque les gusta el lunes.",
    "Un programador va a la tienda a comprar leche. Su esposa le dice: Si hay huevos, trae seis. El programador vuelve con seis botellas de leche."]

const astrologia = [
    "Hoy es un día excelente para tomar decisiones importantes.",
    "Tu creatividad te llevará a grandes logros esta semana.",
    "Estarás rodeado de energías positivas en el trabajo."
];



const generadorDeMensajes = () => {

    const indiceMensajesInspiradores = Math.floor(Math.random() * mensajesInspiradores.length); // Genera un número aleatorio entre 0 y 2 para elegir un mensaje inspirador
    const indiceChistes = Math.floor(Math.random() * chistes.length); // Genera un número aleatorio entre 0 y 2 para elegir un chiste
    const indiceAstrologia = Math.floor(Math.random()) * astrologia.length; // Genera un número aleatorio entre 0 y 2 para elegir una astrología

    const mensaje = `\n\ ${mensajesInspiradores[indiceMensajesInspiradores]}\n\ ${chistes[indiceChistes]}\n\ ${astrologia[indiceAstrologia]}`

    return mensaje;

}

const mensajeAleatorio = generadorDeMensajes();
console.log(mensajeAleatorio);