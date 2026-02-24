# Desarrollo (modo local)

Requisitos previos:

- Node.js (v18) y npm para el frontend si quieres correrlo localmente fuera de Docker.
- Python 3.10+ y `pip` para el backend si se ejecuta localmente.
- Docker y Docker Compose (recomendado para reproducción exacta).

Frontend - desarrollo rápido (con Docker):

1. Levantar el servicio de desarrollo:

   ```bash
   docker compose up frontend-dev
   ```

2. El servicio expone el frontend en `http://localhost:3000`.

Frontend - localmente sin Docker:

1. Entrar en `frontend/`:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

Backend - desarrollo (local):

1. Crear un entorno virtual e instalar dependencias:

   ```bash
   cd backend
   python -m venv .venv
   source .venv/bin/activate
   pip install -r requirements.txt
   ```

2. Ejecutar el servidor Uvicorn:

   ```bash
   uvicorn src.infrastructure.main:app --reload --host 0.0.0.0 --port 8000
   ```

Usando Docker Compose (modo mixto o producción local):

1. Construir imágenes y levantar servicios:

   ```bash
   docker compose build
   docker compose up -d
   ```

2. Ver logs:

   ```bash
   docker compose logs -f backend
   docker compose logs -f frontend
   ```

Notas:

- El servicio `frontend-dev` del `docker-compose.yml` monta el código y hace `npm run dev`, útil para hot-reload.
- El frontend en producción espera los archivos exportados en la carpeta de salida (`out`) que monta Nginx para servir.
