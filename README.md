# My Node.js Docker API

A Node.js API built with Express.js and Redis, containerized with Docker and Docker Compose.

## Features

- Express.js web server
- Redis integration for data storage
- Docker containerization
- Docker Compose for multi-service setup

## Prerequisites

- Node.js (v18+)
- Docker and Docker Compose

## Installation

1. Clone the repository
2. Install dependencies: `npm install`

## Usage

### Challange 1: Local Development (Port 1000) - express.js

Run locally on port 1000 (works without Redis):

```bash
npm start
```

Access: http://localhost:1000

Note: Redis data will be null locally. Use Docker for full Redis functionality.

### Challenge 2: Docker with Redis (Port 2000) - redisAndLinkServiceDocker

Run with Docker and Redis on port 2000:

```bash
npm run docker
```

Access: http://localhost:2000

## API Endpoints

### GET /

Returns JSON response with:
- message: "Welcome! Redis is connected."
- time: Current timestamp
- stored_in_redis: Last visit timestamp

### GET /counter

Returns JSON response with:
- counter: Incremented visit counter (stored in Redis)

## Project Structure

```
my-node-docker-api/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── src/
│   └── redisAndLinkServiceDocker.js
└── README.md
```

## Docker Setup

- **API Service**: Node.js app on port 2000 (internal 2000)
- **Redis Service**: Redis database on port 6379

## Scripts

- `npm start`: Run locally on port 1000
- `npm run docker`: Run with Docker Compose on port 2000

## Technologies

- Node.js
- Express.js
- Redis
- Docker
- Docker Compose 