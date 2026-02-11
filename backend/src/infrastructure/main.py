from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/api/health")
def health():
    return JSONResponse(content={"status": "ok"})

# Aquí se agregarán más endpoints siguiendo arquitectura hexagonal
