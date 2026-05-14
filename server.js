import express from "express";
import cors from "cors";
import logger from "morgan";
import { PORT } from "./config.js";
import { supabase } from "./db.js";

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

server.get("/", async (req, res) => {
    
  res
    .status(200)
    .json({ message: "Welcome to the inventory management system API" });
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
