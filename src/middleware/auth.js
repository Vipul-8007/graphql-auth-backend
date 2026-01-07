const jwt = require("jsonwebtoken");

const authMiddleware = (req) => {
  const authHeader = req.headers.authorization || "";
  if (!authHeader) return null; // Public requests allowed

  const token = authHeader.replace("Bearer ", "");
  try {
    return jwt.verify(token, process.env.JWT_SECRET); // Decode user from token
  } catch (err) {
    throw new Error("Invalid or expired token");
  }
};

module.exports = authMiddleware;
