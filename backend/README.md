# backend/README.md

# Image Processor Backend

This is the backend service for the Image Processor application. It is built using Node.js and Express, and it handles image uploads and processing status checks.

## Features

- Upload images for processing.
- Check the status of image processing tasks.
- Uses Redis for task management.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- Redis

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd image-processor-app/backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

### Running the Application

1. Start the Redis server (if not already running):

   ```
   docker-compose up redis
   ```

2. Start the backend server:

   ```
   npm start
   ```

The backend server will be running on `http://localhost:3000`.

### API Endpoints

- **POST /upload**
  - Upload an image for processing.
  - Request body: FormData with the image file.
  - Response: JSON containing the `taskId`.

- **GET /status/:taskId**
  - Check the processing status of the uploaded image.
  - Response: JSON containing the `status` and `result` (if processing is done).

## Docker

To build and run the backend service using Docker, use the following command:

```
docker-compose up backend
```

This will build the Docker image and start the backend service.

## License

This project is licensed under the MIT License.