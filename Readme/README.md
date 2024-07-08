
# TODO APPLICATION

This Todo application is designed as a full-stack development project to assess skills in both backend and frontend development, containerized using Docker Compose.


## Overview

This project aims to create a Todo application with the following functionalities:

- Add a new todo item.
- Edit an existing todo item.
- Delete a todo item.
- Mark a todo item as complete/incomplete.
- View a list of all todo items.
- Search for todo items.
- Authenticate using third-party providers (e.g., Google Auth or Facebook Auth).
- The application includes both a backend and a frontend, which are containerized using Docker Compose.


## Requirements

### Backend
- Database: MySQL 8
- Framework: Spring with Hibernate
### Frontend
- Framework: React.js with TypeScript
### Containerization
- Docker Compose to containerize the application.
- Ensure the application starts with a single Docker Compose command.


## Installation

### Prerequisites
- Docker Desktop
- Terminal
- VS Code
- MySQL Server
- Eclipse IDE
- Postman

### Steps
- Clone the repository:
```bash
  git clone <repository_url>
  cd <repository_directory>
```

- Set up environment variables:
Create a .env file in the root directory and add   necessary environment variables for the database and authentication providers.

- Build and run the application using Docker Compose:
```bash
  docker-compose up --build
```


## Usage
Once the application is up and running, you can access the frontend via the browser and perform the following operations:

- Add, edit, delete, and mark todo items as complete/incomplete.
- View and search through the list of todo items.
- Authenticate using Google Auth or Facebook Auth.


## Approach/Challanges
### Approach
- The backend is built using [Spring with Hibernate / Node.js with Express.js], which provides RESTful endpoints for CRUD operations and search functionality.
- The frontend is built using [selected frontend framework], which interacts with the backend to perform necessary operations.
- Docker Compose is used to manage multi-container applications, ensuring easy setup and deployment.
- Firebase is used for Google authentication to simplify the process and integrate secure auhtentication in the application.
### Challenges
- Integration of third-party authentication required handling OAuth flows and securing user data using spring-boot dependencies.
- Ensuring smooth communication between frontend and backend services within Docker containers.
- Implementing a responsive design that works seamlessly across different devices.


## Errors
### Oauth2Login Error
- Description: Outh2 Login is not enabled which is leading to redirect_uri_mismatch error.
- Solution: Unresolved.

## Docker Compose
-  Screenshot of the Docker Desktop added in Docker-image folder.