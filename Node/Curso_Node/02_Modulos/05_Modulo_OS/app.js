// Importamos el módulo 'os' de Node.js
const os = require("os");

// Imprimimos el tipo de sistema operativo
console.log(os.type());

// Imprimimos la ruta del directorio de inicio del usuario actual
console.log(os.homedir());

// Imprimimos el tiempo de actividad del sistema en segundos
console.log(os.uptime());

// Imprimimos información del usuario actual, como el nombre de usuario, el directorio de inicio, el grupo, etc.
console.log(os.userInfo());