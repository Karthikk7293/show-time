# show time

MERN video-content application with account flows, content management, upload handling, and a React frontend.

## Project scope

The root package starts the Express backend; `frontend/` contains the React application. Account and content workflows require MongoDB and the configured upload service. Start the two applications in separate terminals.

## Run locally

Install Node.js and the package manager used below. Run each command block from the repository root; separate frontend/backend processes use separate terminals.

`frontend`:

```sh
cd frontend
npm install
npm run start
```

Other package scripts: `npm run build`, `npm run test`.

Root application:

```sh
npm install
npm run dev
```

## Source guide

- [backend/index.js](backend/index.js)
- [backend/controllers/adminController.js](backend/controllers/adminController.js)
- [backend/controllers/contentControllers.js](backend/controllers/contentControllers.js)
- [backend/controllers/userController.js](backend/controllers/userController.js)
