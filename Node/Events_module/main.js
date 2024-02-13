// Importa el módulo 'events' de Node.js
let events = require('events');

// Define una función de callback que será ejecutada cuando se emita el evento 'celebration'
let listenerCallback = (data) => {
  // Imprime un mensaje en la consola, concatenando el argumento 'data' recibido
  console.log('Celebrate ' + data);
}

// Crea una nueva instancia de EventEmitter, que es un emisor de eventos
let myEmitter = new events.EventEmitter();

// Registra el evento 'celebration' con el callback 'listenerCallback'
myEmitter.on('celebration', listenerCallback);

// Emite el evento 'celebration' y pasa el string 'Programacion' como argumento
myEmitter.emit('celebration', 'Programacion');
