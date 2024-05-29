# JWT Authentication System with Public API Microservice

This project demonstrates a JWT (JSON Web Token) authentication system using Node.js, along with a public API microservice. 
The main service handles user authentication and authorization using JWT, while the public API microservice provides access to certain routes without requiring login credentials but authorized with an API key.

## Features

- **User Authentication with JWT**: Securely generate and validate JWT tokens for user authentication.
- **Candidate Management**: Add and retrieve candidate information to/from the database.
- **Public API Microservice**: Access certain endpoints using an API key instead of email and password.

## Project Components

### Main Service

- **Endpoints**:
  - `POST /api/register`: Register a new user.
  - `POST /api/login`: Authenticate a user and generate a JWT token.
  - `POST /api/protected`: Access a protected route (requires valid JWT token).
  - `POST /api/candidate`: Add a candidate to the database (requires valid JWT token).
  - `GET /api/candidate`: Retrieve candidates for the authenticated user (requires valid JWT token).

### Public API Microservice

- **Endpoints**:
  - `POST /api/public/profile`: Retrieve the profile information of the user corresponding to the provided API key.
  - `GET /api/public/candidate`: Retrieve all candidates for the user corresponding to the provided API key.

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account (or a local MongoDB instance)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/jwt-auth-public-api.git
   cd jwt-auth-public-api
   
2. Install dependencies for both the main service and the public API microservice:
    ```sh
    cd main-service
  
    npm install
  
    cd ../public-api
  
    npm install

4. Set up environment variables: 
   Create a .env file in both main-service and public-api directories. 
   Add the following variables to each .env file:

    ```sh
    MONGO_URL=<your_mongodb_url>
    PORT=<port_number>
    SEC_JWT=<your_jwt_secret>


### Running the Services
 1. Start the main service:

    ```sh
    cd main-service
    npm run dev

 2. Start the public API microservice:

    ```sh
    cd public-api
    npm run dev