# Rayos X PWA

PWA estática para practicar ejercicios de ajedrez. La interfaz carga las posiciones desde JSON separado y guarda el progreso en el dispositivo.

## Ejecutar localmente

Desde la raíz del repositorio:

    python3 -m http.server 8000

Abrí http://localhost:8000/rayos-x-pwa/. El service worker y la instalación PWA requieren HTTPS o localhost.

## Incluido en esta versión

- Tablero responsive con selección de casillas.
- Carga asíncrona desde data/mate-en-una.json.
- Pista, reinicio de posición, navegación entre ejercicios y vista de lista.
- Progreso por ejercicio guardado en localStorage.
- Service worker que precarga la app y el JSON para uso offline.

## Alcance y limitaciones

- Por ahora hay un único ejercicio de «Mate en una jugada» (ejercicio 1, página impresa 7).
- La comprobación compara el movimiento del usuario con la primera jugada de solución; no sustituye un motor completo de reglas de ajedrez.
- Los datos del libro se incorporan únicamente después de cotejar posición y solución. No completar posiciones por OCR sin verificación.
- Pendiente: reemplazar esta interfaz compacta por la interfaz original del ZIP rayos-x-pwa.zip y recuperar sus iconos originales. El ZIP original se ha conservado como referencia de trabajo, pero esos archivos todavía no están versionados en este directorio.
- Pendiente: ejecutar pruebas en navegador móvil/escritorio e instalación/offline. No se debe considerar esa verificación completada hasta probarla.

## Formato de datos

Cada ejercicio incluye id, chapter, bookPage, sideToMove, fen, solutionUci, solutionSan, status y una nota de verificación. Consultá data/README.md.
