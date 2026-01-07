require("dotenv").config(); // Load environment variables
const createApp = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

(async () => {
  await connectDB(); // Connect MongoDB before starting server
  const app = await createApp();

  app.listen(PORT, () => {
    console.log(`Server Ready at http://localhost:${PORT}/graphql`);
  });
})();
