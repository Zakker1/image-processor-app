## Running the Application with Docker

This project is fully containerized and designed to run using Docker Compose. The setup includes specific version requirements and configurations for each service, as defined in the provided Dockerfiles and Compose file.

### Project-Specific Docker Requirements

- **Backend**: Uses Node.js version `22.13.1-slim` (configurable via the `NODE_VERSION` build argument in the backend Dockerfile).
- **Worker**: Uses Python `3.10-slim`.
- **Redis**: Uses the official `redis:latest` image.

### Environment Variables

- No environment variables are strictly required by default. If you need to provide custom environment variables (e.g., for connecting to external services), you can create `.env` files in the respective service directories and uncomment the `env_file` lines in `docker-compose.yml`.

### Build and Run Instructions

To build and start all services, run:

```
docker-compose up --build
```

This command will build the Docker images for the backend and worker, and start all services (backend, worker, and Redis) as defined in the Compose file.

### Special Configuration

- The `uploads` directory is used by the backend to store uploaded and processed images. This directory is managed inside the backend container.
- Redis data is not persisted by default. To enable persistence, uncomment the `volumes` section for Redis in `docker-compose.yml`.
- All services are connected via a custom Docker network (`appnet`) for internal communication.

### Exposed Ports

- **Backend**: [http://localhost:3000](http://localhost:3000)
- **Redis**: `localhost:6379` (for development/debugging)

> **Note:** The frontend service is not included in the provided `docker-compose.yml` but is present in the project structure. If you wish to run the frontend in Docker, ensure it is added to your Compose file and configure the appropriate port (commonly `5173`).
