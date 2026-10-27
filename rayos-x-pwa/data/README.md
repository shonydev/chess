# Datos de ejercicios

Los ejercicios se guardan separados de la interfaz para que el tablero pueda reutilizarse sin mezclar lógica de presentación y contenido.

## Formato

- `id`: número del ejercicio en el libro.
- `chapter`: capítulo, conservando el nombre en español.
- `bookPage`: página impresa del libro, no el índice del PDF.
- `sideToMove`: `w` para blancas, `b` para negras.
- `fen`: posición inicial en notación FEN.
- `solutionUci`: secuencia de jugadas en UCI.
- `solutionSan`: solución en notación algebraica española.
- `status`: `verified` solo cuando se cotejaron posición y solución.

## Criterio de calidad

No marcar ejercicios como verificados por OCR solamente. La posición se transcribe del diagrama; la solución se coteja con la sección de soluciones y se comprueba que la jugada sea legal y cumpla el objetivo del ejercicio.

El archivo `mate-en-una.json` contiene por ahora únicamente el ejercicio 1. Los demás ejercicios se incorporarán en lotes después de verificar cada posición.
