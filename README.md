Countries API
A simple RESTful API built with Node.js and Express to retrieve country information. The API supports fetching a list of countries (with flags) and details of a specific country (capital and population), defined using OpenAPI (Swagger) spec.

Features
GET /countries — Returns a list of all countries (name + flag)

GET /countries/:name — Returns details about a specific country (name, population, capital)

Follows REST best practices

Containerized with Docker for easy deployment

Fully local, no external databases or APIs needed

Tech Stack
Node.js + Express

Docker (for containerization)

JSON file as mock data

Optional: Jest + Supertest for testing

Project Structure
kotlin
Copy
Edit
countries-api/
├── app.js  
├── controllers/  
│   └── countryController.js  
├── routes/  
│   └── countryRoutes.js  
├── services/  
│   └── countryService.js  
├── data/  
│   └── countries.json  
├── Dockerfile  
├── .dockerignore  
└── README.md
Prerequisites
Node.js (https://nodejs.org) — only required if not using Docker

Docker (https://www.docker.com/products/docker-desktop)

A browser or API tool like Postman or curl

Running with Docker
1. Make sure Docker is installed and running
Download Docker Desktop from: https://www.docker.com/products/docker-desktop
Verify installation:

bash
Copy
Edit
docker --version
2. Build the Docker image
bash
Copy
Edit
docker build -t countries-api .
3. Run the container
bash
Copy
Edit
docker run -p 3000:3000 countries-api
4. Visit the API
http://localhost:3000/countries

http://localhost:3000/countries/France

Running Locally Without Docker
1. Clone the project and install dependencies
bash
Copy
Edit
git clone https://github.com/yourusername/countries-api.git
cd countries-api
npm install
2. Start the server
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
This API follows the OpenAPI 3.0 format:

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
If running in the terminal:
Press Ctrl + C

Author
Built by Sashen Govender