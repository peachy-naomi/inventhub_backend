import express from "express";
import cors from "cors";
import logger from "morgan";
import { CORS } from "./lib/config.js";

const server = express();

server.use(cors(CORS));
server.use(logger("dev"));
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Inventory Management System Server",
    version: "v1.0.0",
    status: "online",
    endpoints: "/api/v1/<endpoint>",
  });
});

export default server;
