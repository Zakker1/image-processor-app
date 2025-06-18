# frontend/README.md

# Image Processor Application - Frontend

This is the frontend part of the Image Processor application built with React.js. It allows users to upload images and check the processing status.

## Features

- Upload images to the backend for processing.
- Check the status of the uploaded images.
- Display the result of the image processing.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd image-processor-app/frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm run dev
```

The application will be available at `http://localhost:5173`.

### Docker

To build and run the frontend using Docker, execute the following command in the root directory of the project:
```
docker-compose up --build frontend
```

## File Structure

- `src/App.jsx`: Main React component for handling file uploads and status checks.
- `Dockerfile`: Docker configuration for the frontend service.

## License

This project is licensed under the MIT License.