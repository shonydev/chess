# Chess — aplicación web

PWA estática para practicar ejercicios de ajedrez. La interfaz carga las posiciones desde un catálogo JSON separado y guarda el progreso en el dispositivo.

## Ejecutar localmente

Desde la raíz del repositorio:

```bash
python3 -m http.server 8000
```

Abrí http://localhost:8000/app/. El service worker y la instalación PWA requieren HTTPS o localhost.

## Funcionalidades

- Tablero responsive con selección de casillas y piezas SVG.
- Catálogo separado en `data/mate-en-una.json`.
- Pistas, reinicio, navegación y selector de ejercicios.
- Progreso guardado localmente.
- Service worker para caché y uso sin conexión.

## Calidad de los ejercicios

Cada posición se transcribe del diagrama y su solución se coteja con la sección de respuestas. No se deben marcar ejercicios como verificados a partir de OCR solamente. Las comprobaciones actuales validan sintaxis y esquema básico; no reemplazan la verificación de legalidad con un motor de ajedrez.

## Formato de datos

Cada ejercicio incluye `id`, `chapter`, `bookPage`, `sideToMove`, `fen`, `solutionUci`, `solutionSan`, `status` y notas de verificación. Consultá `data/README.md`.
