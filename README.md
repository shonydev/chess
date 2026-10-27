# Chess

Aplicación web progresiva para practicar ejercicios de táctica de ajedrez a partir de posiciones verificadas del libro *1001 Chess Exercises*.

**Aplicación:** https://shonydev.github.io/chess/

## Estructura del repositorio

```text
chess/
├── .github/workflows/       # Validación y despliegue automático
├── app/                     # Aplicación web estática (PWA)
│   ├── data/                # Catálogo de ejercicios en JSON
│   ├── index.html           # Interfaz y lógica del tablero
│   ├── manifest.webmanifest
│   └── sw.js                # Caché y soporte sin conexión
├── docs/source-materials/   # Libros y documentos de referencia
├── scripts/                 # Validaciones locales y CI
└── README.md
```

## Desarrollo local

Desde la raíz del repositorio:

```bash
python3 -m http.server 8000
```

Abrí http://localhost:8000/app/. Para probar la instalación PWA y el service worker, usá HTTPS o localhost.

## Flujo de trabajo

- Los ejercicios se mantienen en `app/data/mate-en-una.json`.
- Cada posición se coteja con el diagrama original y su solución antes de marcarla como verificada.
- Las comprobaciones automáticas se ejecutan con `node scripts/check-chess.mjs`.
- Los cambios en `app/` se publican automáticamente en GitHub Pages.
- El material de referencia se conserva en `docs/source-materials/`.
