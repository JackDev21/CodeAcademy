console.log(process.argv)

console.log(process.argv[2])

console.log(process.argv[3])

//[node, app.js, ]

/*
🖥️  /g/CodeAcademy/Node/Curso_Node/02_Modulos/04_Modulo_process 🚀 ---> node argv.js 6 7
🖥️  /g/CodeAcademy/Node/Curso_Node/02_Modulos/04_Modulo_process 🚀 ---> node argv.js
🖥️  /g/CodeAcademy/Node/Curso_Node/02_Modulos/04_Modulo_process 🚀 ---> node argv.js
[
  'C:\\Program Files\\nodejs\\node.exe',
  'G:\\CodeAcademy\\Node\\Curso_Node\\02_Modulos\\04_Modulo_process\\argv.js'
]
🖥️  /g/CodeAcademy/Node/Curso_Node/02_Modulos/04_Modulo_process 🚀 ---> node argv.js 6 7 
[
  'C:\\Program Files\\nodejs\\node.exe',
  'G:\\CodeAcademy\\Node\\Curso_Node\\02_Modulos\\04_Modulo_process\\argv.js',
  '6',
  '7'
] 
*/



for (let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i])
}

/* 🖥️  /g/CodeAcademy/Node/Curso_Node/02_Modulos/04_Modulo_process 🚀 ---> node argv.js 1 2 3 4 5 
[
  'C:\\Program Files\\nodejs\\node.exe',
  'G:\\CodeAcademy\\Node\\Curso_Node\\02_Modulos\\04_Modulo_process\\argv.js',
  '1',
  '2',
  '3',
  '4',
  '5'
]
1
2
1
2
3
4
5 */

console.log(process.memoryUsage())