# API pública

Endpoints actuales (implementados en `backend/src/infrastructure/main.py`):

- `GET /api/hola`
  - Respuesta: `200` JSON `{ "message": "Hola mundo desde FastAPI!" }`

- `GET /api/health`
  - Respuesta: `200` JSON `{ "status": "ok" }`

Cómo probar desde la máquina host:

```bash
curl -s http://localhost:8000/api/health
curl -s http://localhost:8000/api/hola
```

Extensión:

- Añadir nuevos endpoints en `backend/src/infrastructure/` siguiendo la organización hexagonal sugerida:
  - `src/domain/` para modelos y lógica
  - `src/application/` para casos de uso
  - `src/infrastructure/` para adaptadores HTTP, BD, etc.
