# AS_repo_base

Proyecto base con frontend Next.js + Nginx y backend FastAPI (arquitectura hexagonal).

Resumen rápido:

- Frontend: Next.js en `frontend/`. En producción sirve archivos estáticos mediante Nginx.
- Backend: FastAPI en `backend/src/` con endpoints bajo `/api`.
- Orquestación local: `docker-compose.yml` con servicios `frontend`, `frontend-dev` y `backend`.

Documentación del proyecto:

- Arquitectura: [docs/architecture.md](docs/architecture.md)
- Desarrollo: [docs/development.md](docs/development.md)
- Despliegue: [docs/deployment.md](docs/deployment.md)
- API: [docs/api.md](docs/api.md)

Comandos útiles

- Construir imágenes y levantar en background:

	```bash
	docker compose build
	docker compose up -d
	```

- Levantar solo en modo desarrollo (frontend con hot-reload):

	```bash
	docker compose up frontend-dev backend
	```

- Ejecutar backend localmente (sin Docker):

	```bash
	cd backend
	python -m venv .venv
	source .venv/bin/activate
	pip install -r requirements.txt
	uvicorn src.infrastructure.main:app --reload --host 0.0.0.0 --port 8000
	```

- Ejecutar frontend localmente (sin Docker):

	```bash
	cd frontend
	npm install
	npm run dev
	```

Puntos de entrada / endpoints de ejemplo

- `http://localhost:8000/api/health` → status de la API
- `http://localhost:8000/api/hola` → mensaje de bienvenida

Contribuir

- Revisa `docs/development.md` para el flujo de desarrollo local.
- Sigue la organización del backend (hexagonal) al añadir nuevas capas o adaptadores.
