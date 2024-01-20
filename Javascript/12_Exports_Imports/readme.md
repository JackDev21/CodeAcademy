````markdown
# Import y Export en JavaScript

En JavaScript, los `import` y `export` son características clave para organizar y modularizar tu código. Permiten dividir tu aplicación en módulos, facilitando el mantenimiento y la reutilización del código.

## Export

### Exportar Variables, Funciones y Objetos

Puedes exportar diversas entidades desde un módulo:

```javascript
// En el módulo 'module.js'

// Exportar variables
export const variableA = "valor";

// Exportar funciones
export function funcionB() {
	// ...
}

// Exportar objetos
export const objetoC = { key: "value" };
```
````

### Exportar por Defecto

También puedes exportar una única entidad como exportación predeterminada:

```javascript
// En el módulo 'module.js'

const valorPredeterminado = "Hola, mundo";

export default valorPredeterminado;
```

## Import

### Importar Entidades Específicas

Para importar variables, funciones u objetos específicos desde otro módulo:

```javascript
// En otro módulo

import { variableA, funcionB, objetoC } from "./module.js";

// Usa variableA, funcionB, objetoC aquí
```

### Importar Exportación Predeterminada

Cuando hay una exportación predeterminada, puedes importarla con un nombre de tu elección:

```javascript
// En otro módulo

import valorPredeterminado from "./module.js";

// Usa valorPredeterminado aquí
```

## Combinar Importaciones

Puedes combinar importaciones en una sola declaración:

```javascript
// En otro módulo

import { variableA, funcionB } from "./module.js";
import valorPredeterminado from "./module.js";

// Usa variableA, funcionB, valorPredeterminado aquí
```

## Alias en Importaciones

Puedes asignar alias a las importaciones para evitar conflictos de nombres:

```javascript
// En otro módulo

import { variableA as aliasA, funcionB as aliasB } from "./module.js";

// Usa aliasA, aliasB aquí
```

---
