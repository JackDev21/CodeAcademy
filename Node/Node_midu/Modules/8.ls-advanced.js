// Importamos los módulos necesarios
const fs = require('node:fs/promises'); // Módulo fs con promesas
const path = require('node:path'); // Módulo path para trabajar con rutas de archivos
const pc = require('picocolors'); // Módulo picocolors para dar formato a los textos en la consola


// Obtenemos el directorio que queremos listar desde los argumentos de la línea de comandos,
// si no se proporciona, usamos el directorio actual
const folder = process.argv[2] ?? '.';

// Función asincrónica para listar archivos y directorios en el directorio dado
async function ls(folder) {
  let files;
  try {
    // Leemos el contenido del directorio de manera asíncrona
    files = await fs.readdir(folder);
  } catch {
    // Si no se puede leer el directorio, mostramos un mensaje de error y salimos del programa
    console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`));
    process.exit(1);
  }

  // Mapeamos los archivos del directorio a promesas para obtener información sobre cada archivo
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file); // Construimos la ruta completa del archivo
    let stats;
    try {
      // Obtenemos información sobre el archivo (tamaño, fecha de modificación, etc.)
      stats = await fs.stat(filePath);
    } catch {
      // Si no se puede leer el archivo, mostramos un mensaje de error y salimos del programa
      console.error(`No se pudo leer el archivo ${filePath}`);
      process.exit(1);
    }

    // Determinamos si el archivo es un directorio o un archivo regular
    const isDirectory = stats.isDirectory();
    // Creamos una cadena de texto con información sobre el archivo (tipo, nombre, tamaño y fecha de modificación)
    const fileType = isDirectory ? 'd' : 'f';
    const fileSize = stats.size.toString();
    const fileModified = stats.mtime.toLocaleString();
    // Devolvemos la información formateada del archivo
    return `${pc.magenta(fileType)} ${pc.blue(file.padEnd(30))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`;
  });

  // Esperamos a que todas las promesas de información de archivos se resuelvan
  const filesInfo = await Promise.all(filesPromises);

  // Imprimimos la información de cada archivo en la consola
  filesInfo.forEach(fileInfo => console.log(fileInfo));
}

// Llamamos a la función ls con el directorio proporcionado como argumento
ls(folder);
