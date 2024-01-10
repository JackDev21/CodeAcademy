### Clase vs className

Aprenderás algunos trucos poderosos y algunos errores comunes que debes evitar.

La gramática en JSX es en su mayoría igual que en HTML, pero hay diferencias sutiles a tener en cuenta. La más frecuente de estas involucra la palabra class.

En HTML, es común usar class como nombre de atributo:

```html
<h1 class="big">Título</h1>
```

¡Pero en JSX, no puedes usar la palabra class! En su lugar, debes utilizar className:

```jsx
<h1 className="big">Título</h1>
```

Esto se debe a que JSX se traduce a JavaScript, y class es una palabra reservada en JavaScript.

Cuando se renderiza JSX, los atributos className se representan automáticamente como atributos class.

```

```
