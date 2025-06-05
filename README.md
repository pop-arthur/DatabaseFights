# DatabaseFights Project

This is a full-stack web application consisting of:

* **Backend** (Python + FastAPI + PostgreSQL)
* **Frontend** (React.js)

## 🔧 Project Structure

```
project-root/
│
├── backend/
│   ├── app/
│   │   ├── models/         # SQLAlchemy models
│   │   ├── routes/         # API routes
│   │   ├── schemas/        # Pydantic schemas for request/response validation
│   │   ├── app_instance.py # App factory or shared app instance
│   │   ├── db.py           # DB connection and session management
│   │   ├── Dockerfile      # Docker image for FastAPI backend
│   │   └── main.py         # Main FastAPI app entry point
│   ├── db/
│   │   └── init/           # SQL scripts executed when the PostgreSQL DB is initialized
│   ├── docker-compose.yml  # Docker Compose config for backend and database
│   └── README.md
│
├── frontend/
│   ├── public/             # Static files
│   ├── src/                # React source code
│   ├── package.json        # Frontend dependencies and scripts
│   └── README.md
│
└── README.md               # You're here!
```

## 🚀 Getting Started

### 1. Backend (FastAPI + PostgreSQL)

#### Prerequisites

* Docker + Docker Compose

#### Start the backend

```bash
cd backend
docker compose up
```

This will:

* Build the FastAPI backend container
* Start a PostgreSQL container
* Initialize the database using SQL files in `db/init/`

The backend will be available at `http://localhost:8000`.

FastAPI docs: `http://localhost:8000/docs`

---

### 2. Frontend (React)

#### Prerequisites

* Node.js (v18+ recommended)
* npm

#### Start the frontend

```bash
cd frontend
npm install
npm start
```

The React app will be available at `http://localhost:3000`.

---

## 🛠 Tech Stack

**Backend:**

* FastAPI
* SQLAlchemy
* PostgreSQL
* Docker

**Frontend:**

* React.js
* JavaScript

---

## 🗂 Database Initialization

SQL files located in `backend/db/init/` are executed automatically the first time the PostgreSQL container is started. These scripts typically:

* Create tables and schema
* Insert default or sample data

---

## 📦 Environment Variables

You can configure the database and app settings via environment variables in the `docker-compose.yml`. For local development, defaults are usually provided.

---
