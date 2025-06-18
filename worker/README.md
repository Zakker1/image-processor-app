# worker/README.md
# Worker Service for Image Processing

This directory contains the worker service responsible for processing images uploaded through the backend service. The worker retrieves tasks from a Redis queue, processes the images, and updates the task status in Redis.

## Requirements

The worker is built using Python and requires the following dependencies:

- redis
- pillow
- numpy

These dependencies are listed in the `requirements.txt` file.

## How It Works

1. The worker connects to a Redis instance to listen for tasks.
2. When a task is available, it retrieves the image path and processes the image.
3. The image is converted to grayscale, and the average pixel value is calculated.
4. The result is stored back in Redis, along with the task status.

## Running the Worker

To run the worker service, you can use Docker. Ensure that the Redis service is running, then build and start the worker using Docker Compose:

```bash
docker-compose up worker
```

This command will build the worker image and start the worker service, which will begin processing tasks from the Redis queue.