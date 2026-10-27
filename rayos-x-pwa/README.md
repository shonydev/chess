# Rayos X PWA — primera versión funcional

Aplicación web instalable y usable offline para practicar ejercicios de ajedrez. Se integra en esta carpeta para revisión antes del merge.

## Qué incluye esta versión

- Interfaz responsive en español y tablero interactivo.
- Primer ejercicio de **Mate en una jugada** (página impresa 7 del libro).
- Validación del movimiento esperado, pista y reinicio de posición.
- Progreso guardado en `localStorage`.
- Vista de ejercicios y configuración PWA básica (manifest + service worker).

## Ejecutar localmente

Serví esta carpeta con cualquier servidor estático, por ejemplo:

```sh
python3 -m http.server 8000
```

Después abrí `http://localhost:8000/rayos-x-pwa/` (si el servidor está en la raíz del repo) o la ruta correspondiente a la carpeta servida. Para probar el modo offline, abrí la app una vez desde localhost y luego desconectá la red.

## Alcance y limitaciones conocidas

- Por ahora hay **un único ejercicio** cargado; los siguientes deben transcribirse y validarse antes de agregarlos.
- Esta es una primera implementación funcional para habilitar la revisión. **La copia fiel de todos los archivos y detalles visuales del ZIP original todavía queda pendiente**; la UI de esta versión es una implementación compacta.
- La validación comprueba el movimiento de solución del ejercicio, no implementa un motor completo de reglas de ajedrez.
- La instalación y el service worker requieren servir la app por HTTPS o localhost.

## Datos del ejercicio

El ejercicio 1 está en `data/mate-en-una.json`; la vista inicial actual lo incluye de forma directa para mantener el MVP autocontenido. La siguiente iteración debe conectar la interfaz al JSON y ampliar el lote después de validar cada posición y solución.
