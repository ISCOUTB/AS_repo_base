# Backend FastAPI (Hexagonal)

Este backend implementa FastAPI siguiendo arquitectura hexagonal.

- Solo responde a solicitudes en `/api`.
- Estructura recomendada:
  - `/src/domain` (lógica de negocio)
  - `/src/application` (casos de uso)
  - `/src/infrastructure` (adaptadores, FastAPI)

## Scripts
- `pip install -r requirements.txt` para instalar dependencias
- `uvicorn src.infrastructure.main:app` para correr el servidor

El backend será accesible solo vía `/api`.
