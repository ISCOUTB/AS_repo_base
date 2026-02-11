# Frontend Next.js

Este proyecto usa Next.js para el frontend. El build será servido por Nginx.

## Scripts
- `npm install` para instalar dependencias
- `npm run build` para generar el build estático

## Estructura recomendada
- `/pages` para rutas
- `/public` para estáticos
- `/out` para el build exportado

El contenedor de Nginx montará `/out` como raíz del sitio.
