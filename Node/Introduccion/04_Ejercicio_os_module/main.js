// Importa el módulo 'os' de Node.js, que proporciona utilidades relacionadas con el sistema operativo
const os = require('os');

// Crea un objeto llamado 'server' con tres propiedades: 'type', 'architecture' y 'uptime'
const server = {
    // Asigna el tipo de sistema operativo (por ejemplo, 'Windows_NT' en Windows o 'Linux' en sistemas basados en Linux)
    type: os.type(),
    // Asigna la arquitectura del procesador (por ejemplo, 'x64' para sistemas de 64 bits)
    architecture: os.arch(),
    // Asigna el tiempo de actividad del sistema en segundos
    uptime: os.uptime()
}

// Imprime el objeto 'server'
console.log(server);


/*[Running] node "g:\CodeAcademy\Node\Introduccion\04_Ejercicio_os_process\main.js"
{ type: 'Windows_NT', architecture: 'x64', uptime: 7429.921 }*/