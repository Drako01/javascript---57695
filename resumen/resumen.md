# Asincronía en JavaScript

JavaScript es un lenguaje de programación que, por defecto, ejecuta el código de manera secuencial (una línea tras otra). Sin embargo, algunas operaciones pueden llevar mucho tiempo en completarse (como las solicitudes a un servidor o la lectura de archivos grandes). La asincronía permite que estas operaciones no bloqueen la ejecución del resto del código.

### ¿Qué son `setTimeout` y `setInterval`?

- **`setTimeout`**: Sirve para ejecutar una función una vez después de un cierto período de tiempo.
  
  ```javascript
  setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos");
  }, 2000); // 2000 milisegundos = 2 segundos
  ```

- **`setInterval`**: Sirve para ejecutar una función repetidamente con un intervalo de tiempo fijo entre cada ejecución.
  
  ```javascript
  setInterval(() => {
    console.log("Esto se ejecuta cada 3 segundos");
  }, 3000); // 3000 milisegundos = 3 segundos
  ```

### Call Stack (Pila de llamadas)

El **call stack** es una estructura de datos donde se almacenan las funciones que se están ejecutando y las que están esperando para ser ejecutadas. Es una pila LIFO (Last In, First Out), lo que significa que la última función que entra es la primera que se ejecuta.

- Cuando llamas a una función, se añade al call stack.
- Cuando la función termina, se elimina del call stack.

Ejemplo:

```javascript
function primera() {
  console.log("Primera función");
  segunda();
}

function segunda() {
  console.log("Segunda función");
}

primera();
```

Aquí, el call stack primero tiene `primera`, luego `segunda`, y se van ejecutando en ese orden.

### Event Loop (Bucle de eventos)

El **event loop** es lo que permite que JavaScript realice operaciones asincrónicas sin bloquear el call stack. Su trabajo principal es monitorear el call stack y la cola de mensajes (message queue). 

Cuando el call stack está vacío (no hay funciones en ejecución), el event loop toma la primera tarea de la cola de mensajes y la añade al call stack, permitiendo su ejecución.

### Cola de mensajes (Message Queue)

La **message queue** (cola de mensajes) es una lista de tareas que esperan para ser ejecutadas. Estas tareas pueden ser eventos, callbacks de `setTimeout`, `setInterval`, y otras operaciones asincrónicas.

Proceso:

1. Se llama a una función asincrónica (por ejemplo, `setTimeout`).
2. La función se ejecuta y la callback se coloca en la message queue después del tiempo especificado.
3. El event loop verifica si el call stack está vacío.
4. Si el call stack está vacío, el event loop mueve la callback de la message queue al call stack y se ejecuta.

### Ejemplo completo

```javascript
console.log("Inicio");

setTimeout(() => {
  console.log("Esto viene del setTimeout");
}, 2000);

console.log("Fin");
```

1. `console.log("Inicio")` se ejecuta y se imprime.
2. `setTimeout` se llama, su callback se coloca en la message queue para ejecutarse después de 2 segundos.
3. `console.log("Fin")` se ejecuta y se imprime.
4. Después de 2 segundos, el event loop mueve la callback del `setTimeout` al call stack y se ejecuta `console.log("Esto viene del setTimeout")`.

### Resumen

- **Asincronía**: Permite realizar operaciones sin bloquear el flujo del programa.
- **`setTimeout` y `setInterval`**: Métodos para ejecutar código después de un retraso o en intervalos.
- **Call Stack**: Pila de funciones en ejecución.
- **Event Loop**: Bucle que maneja el call stack y la message queue para gestionar la asincronía.
- **Message Queue**: Cola donde se almacenan las tareas asincrónicas que esperan para ser ejecutadas.