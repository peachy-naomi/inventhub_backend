import dotenv from "dotenv";
dotenv.config();

const CORS = {
  origin: "*",
  methods: "GET, POST, DELETE, PUT, PATCH",
  allowedheaders: "Content-Type, Authorization",
  credentials: false,
  optionSuccessStatus: 200,
};

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const PORT = process.env.PORT;

export { SUPABASE_URL, SUPABASE_KEY, PORT, CORS };
