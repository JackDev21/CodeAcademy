```markdown
### Proceso General

El desarrollo guiado por pruebas (TDD) con Mocha sigue un proceso de tres pasos:

1. **Escribir la Prueba:**

   - Comienza con una prueba que describe la funcionalidad que se desea implementar.
   - No es necesario conocer el aspecto del código, solo lo que debe hacer.

2. **Fallar la Prueba:**

   - Escribe código en respuesta a la prueba que falle.
   - Al ejecutar la prueba, deberías ver que falla, indicado en rojo.
   - Ver la prueba fallar primero es positivo, indicando que, al hacerla pasar, el código funciona.

3. **Pasar la Prueba:**
   - Las pruebas fallan y proporcionan comentarios a través de mensajes de error.
   - Lee estos mensajes y responde escribiendo la cantidad mínima de código para abordarlos.

### Ciclo Red-Green-Refactor

#### Rojo

- Escribe una prueba que cubra la funcionalidad deseada.
- Al ejecutarla, debería fallar (mostrar rojo), indicando que aún no se ha implementado.

#### Verde

- Lee el mensaje de error y escribe la mínima cantidad de código para que la prueba pase.
- Continúa este proceso hasta que la prueba pase.
- No te preocupes por la calidad del código en esta etapa.

#### Refactorizar

- Limpia tu código, reduciendo duplicaciones en código y pruebas.
- Trata tus pruebas con tanto respeto como tu código en producción.

---
```
