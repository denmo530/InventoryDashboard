import http from "http";
import app from "./app";
import dotenv from "dotenv";
import { mongoConnect } from "./services/mongo";

// Env
dotenv.config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();

  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

startServer();
