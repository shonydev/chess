# Catálogo de ejercicios

Los ejercicios se guardan por separado de la interfaz para mantener el contenido reutilizable y fácil de validar.

## Formato

- `id`: número del ejercicio en el libro.
- `chapter`: capítulo.
- `bookPage`: página impresa del libro, no el índice del PDF.
- `sideToMove`: `w` para blancas, `b` para negras.
- `fen`: posición inicial en notación FEN.
- `solutionUci`: jugadas de la solución en UCI.
- `solutionSan`: solución en notación algebraica española.
- `status`: `verified` solo después de cotejar posición y solución.
- `verification`: notas breves sobre las comprobaciones realizadas.

## Criterios de calidad

No marcar ejercicios como verificados mediante OCR solamente. Transcribí la posición del diagrama, contrastá la solución con la sección de respuestas y comprobá que la jugada sea legal y cumpla el objetivo.

El catálogo actual comienza con los ejercicios verificados de «Mate en una jugada». Incorporar los siguientes en orden y en lotes pequeños.
