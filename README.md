# Links
hosted Link: https://job-application-portal.vercel.app/jobs

#  Project Setup

This project consists of a backend and a frontend part.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

## Installing

1. download the code.

### Server setup

1. navigate to the backend

```bash
cd backend

```

2. install dependencies

```bash
npm install
```

3. make sure to add .env file if not exist

```
PORT = 8080
MONGODB_URI = "Your mongoDB URL"

```

4. start the server

```bash

npm run dev

```

or

```
node index.js
```

### client setup

1. now navigate to the Client folder

```bash
cd client
```

2. make sure .env.local file is also present in client folder if not create one

```
NEXT_PUBLIC_API_ROUTE = http://localhost:8080/api

```

3. install dependencies

```bash

npm install
```

3. run the client

```bash
npm run dev

```
