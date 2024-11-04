# Issue Tracker Service

An issue tracking API built with Node.js, Express, TypeScript, and UUID for unique identifiers. This API allows users to create, view, update, and delete issues.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
- [Technologies Used](#technologies-used)
- [Available Endpoints](#available-endpoints)
- [Contributing](#contributing)

---

## Project Overview

This project provides a RESTful API for managing issues, with CRUD endpoints to create, retrieve, update, and delete issues. It includes a simple in-memory data storage for demonstration purposes.

## Setup Instructions

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager, installed with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/itslarlee/fusmani-issue-tracker-service.git
   cd fusmani-issue-tracker-service

2. **Install dependencies**:

   ```bash
   npm install

3. **Set up environment variables (optional)**:

   If you have environment-specific variables, create a `.env` file in the root directory and add your variables there.
   
4. **Run the server**:

   For development with automatic restarts using Nodemon:

   ```bash
   npm run dev

5. **Access the API**:

   By default, the server will run on `http://localhost:5000`. You can test the endpoints using a tool like [Postman](https://www.postman.com/) or `curl`.

## Available Endpoints

| Method | Endpoint          | Description                       |
| ------ | ------------------ | --------------------------------- |
| POST   | `/api/issues`      | Create a new issue                |
| GET    | `/api/issues`      | Get a list of all issues          |
| GET    | `/api/issues/:id`  | Get details of a specific issue   |
| PATCH  | `/api/issues/:id`  | Update the status of an issue     |
| DELETE | `/api/issues/:id`  | Delete a specific issue           |

### Example JSON Request and Response

- **Create Issue (POST /api/issues)**

  ```json
  {
    "title": "Sample Issue",
    "description": "This is a sample issue",
    "status": "Open",
    "priority": "High"
  }
  
- **Response**:

  ```json
  {
    "data": {
      "id": "unique-uuid",
      "title": "Sample Issue",
      "description": "This is a sample issue",
      "status": "Open",
      "priority": "High",
      "createdDate": "2023-01-01T00:00:00Z",
      "updatedDate": "2023-01-01T00:00:00Z"
    },
    "message": "Issue created successfully",
    "status": 201
  }

## Technologies Used

- **Node.js** - JavaScript runtime for building scalable network applications
- **Express** - Web application framework for handling routes and middleware
- **TypeScript** - Typed superset of JavaScript for better code maintainability and error checking
- **UUID** - Library to generate unique identifiers for issues
- **Nodemon** - Utility that automatically restarts the server during development

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/), which helps maintain a clear and structured commit history. For example:

   ```bash
   git commit -m "feat: add new endpoint for creating issues"
   
4. Push to the branch (`git push origin feature-name`).

5. Open a pull request.

Please make sure to follow the [Conventional Commits](https://www.conventionalcommits.org/) specification to keep commit messages consistent and meaningful. This practice improves readability and simplifies versioning.

Thank you for contributing!
