import server from "./src/app.js";
import { PORT } from "./src/lib/config.js";

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
});
