# Arquitectura del proyecto

Resumen general:

- Frontend: Next.js (servido por Nginx en producción). El código fuente está en frontend/.
- Backend: FastAPI siguiendo una arquitectura hexagonal. El código está en backend/src/.
- Orquestación: docker-compose.yml configura servicios `frontend`, `frontend-dev` y `backend` conectados por la red `appnet`.

Componentes y responsabilidades:

- `frontend/`:
  - Rutas y UI con Next.js.
  - En producción se construye (`npm run build` + `next export`) y Nginx sirve la carpeta exportada.
- `backend/`:
  - API REST con FastAPI. Adaptadores de infraestructura residen en `backend/src/infrastructure/`.
  - Endpoints expuestos bajo el prefijo `/api` (ej.: `/api/health`, `/api/hola`).
- `docker-compose.yml`:
  - `frontend` (Nginx + contenido estático)
  - `frontend-dev` (imagen Node para desarrollo con volúmenes)
  - `backend` (imagen Python con FastAPI)

Flujo de peticiones (resumen):

1. El navegador solicita una página al `frontend` (Nginx). Si necesita datos, el frontend hace llamadas a `/api/...`.
2. Frontend y backend están en la misma red Docker (`appnet`), por lo que `/api` se resuelve al servicio `backend`.
3. FastAPI procesa la solicitud y devuelve JSON.

Extensibilidad:

- La arquitectura hexagonal en el backend permite añadir adaptadores (BD, colas, etc.) sin acoplar la lógica de negocio.
