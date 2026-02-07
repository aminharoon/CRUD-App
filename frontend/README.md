# FullStack-CRUD-App

Full-stack CRUD application with a Node/Express REST API backend and a React (Vite) frontend for creating, reading, updating, and deleting records.

## Tech Stack

- Backend: Node.js, Express, MongoDB (Mongoose)
- Frontend: React, Vite

## Project Structure

- backend/ — Express API and MongoDB connection
- frontend/ — React UI

## Prerequisites

- Node.js (LTS)
- MongoDB connection string

## Backend Setup

1. Create a .env file in backend/:

   MONGO_URI=your_mongodb_connection_string

2. Install dependencies:

   npm install

3. Start the server:

   npm run dev

The API runs on http://localhost:3000

## Frontend Setup

1. Install dependencies:

   npm install

2. Start the dev server:

   npm run dev

The UI runs on the Vite dev server (see terminal output for URL).

## API Endpoints

- POST /api/node — create a record
- GET /api/node — list all records
- DELETE /api/node/:id — delete a record
- PATCH /api/node/:id — update age
- PUT /api/node/:id — replace name and age

## Notes

- Ensure the backend is running before using the UI.
- If you deploy the frontend separately, configure its API base URL accordingly.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
