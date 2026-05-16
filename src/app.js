import express from "express";
import cors from "cors";
import logger from "morgan";

const server = express();

const corsOptions = {
  origin: "*",
  methods: "GET, POST, DELETE, PUT, PATCH",
  allowedheaders: "Content-Type, Authorization",
  credentials: false,
  optionSuccessStatus: 200,
};

server.use(cors(corsOptions));
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
