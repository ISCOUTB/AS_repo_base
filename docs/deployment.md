# Despliegue

Opciones de despliegue con Docker Compose (apropiado para staging/producción simple):

1. Construir las imágenes y levantar los servicios:

   ```bash
   docker compose build
   docker compose up -d
   ```

2. El frontend (Nginx) quedará expuesto en el puerto `80` y el backend en el puerto `8000` (según `docker-compose.yml`).

Flujo de build para producción (frontend):

1. En `frontend/`:

   ```bash
   npm install
   npm run build
   npm run export
   ```

2. Copiar el contenido de `out/` al volumen que Nginx monta en el contenedor `frontend`.

Consideraciones de seguridad y producción:

- Configurar un proxy inverso con TLS (ej. proxy fronting con certbot/nginx fuera del contenedor) si expones puerto 80/443.
- Añadir variables de entorno seguras para el backend y no exponer servicios internos innecesarios.
