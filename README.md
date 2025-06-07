# Countries API

A simple RESTful API built with Node.js and Express to retrieve country information. The API supports fetching a list of countries (with flags) and details of a specific country (capital and population), defined using the OpenAPI (Swagger) specification.

## Features

- GET /countries — Returns a list of all countries (name + flag)
- GET /countries/:name — Returns details about a specific country (name, capital, population)
- Follows RESTful best practices
- Fully local — no external databases or APIs
- Containerized with Docker for easy deployment
- Unit and integration tests with Jest + Supertest

## Tech Stack

- Node.js + Express
- Docker (for containerization)
- Jest + Supertest (for testing)
- Static JSON file as mock data

## Project Structure

countries-api/
├── app.js
├── controllers/
│ └── countryController.js
├── routes/
│ └── countryRoutes.js
├── services/
│ └── countryService.js
├── data/
│ └── countries.json
├── test/
│ ├── integration/
│ └── unit/
├── Dockerfile
├── .openapi.yaml
├── .dockerignore
├── .package.json
└── README.md

## Prerequisites

- Node.js (https://nodejs.org) — if not using Docker
- Docker (https://www.docker.com/products/docker-desktop)
- API tool (e.g., Postman, Insomnia) or browser/curl for testing

## Running with Docker

1. Ensure Docker is installed  
   Download Docker Desktop: https://www.docker.com/products/docker-desktop

   Verify installation:
   ```bash
   docker --version

2. Build the docker image
  docker build -t countries-api .

3. Run the container
  docker run -p 3000:3000 countries-api

4. Accessing the API
  http://localhost:3000/countries
  http://localhost:3000/countries/France

## Running with Docker Locally

Clone the project and install dependencies

bash
Copy
Edit
git clone https://github.com/yourusername/countries-api.git
cd countries-api
npm install
Start the server

bash
Copy
Edit
node app.js
Server runs at: http://localhost:3000

Example Responses
GET /countries
json
Copy
Edit
[
  { "name": "France", "flag": "🇫🇷" },
  { "name": "Germany", "flag": "🇩🇪" }
]
GET /countries/France
json
Copy
Edit
{
  "name": "France",
  "capital": "Paris",
  "population": 67000000
}
OpenAPI Specification (Excerpt)
yaml
Copy
Edit
/countries:
  get:
    summary: Retrieve all countries
    responses:
      '200':
        description: A list of countries

/countries/{name}:
  get:
    summary: Retrieve a specific country
    parameters:
      - name: name
        in: path
        required: true

Stopping the Server
If running in the terminal: Press Ctrl + C

Author
Built by Sashen Govender