//.js --> por defecto utiliza CommonJs
//.mjs --> para utiliza ES modules
//.cjs --> para utilizar CommonJS


import { sum, sub, mult } from './sum.mjs';

console.log(sum(4, 2));
console.log(sub(3, 2));
console.log(mult(2, 2));

