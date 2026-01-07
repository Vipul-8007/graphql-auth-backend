const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userResolver = {
  Query: {
    users: async (_, __, { user }) => {
      console.log(user);
      if (!user) throw new Error("Unauthorized"); // Auth check
      return await User.find().sort({ createdAt: -1 });
    },
    user: async (_, { id }, { user }) => {
      console.log(user);
      if (!user) throw new Error("Unauthorized");
      return await User.findById(id);
    },
  },

  Mutation: {
    registerUser: async (_, { name, email, password }) => {
      const exists = await User.findOne({ email });
      if (exists) throw new Error("Email already registered");

      const hashedPassword = await bcrypt.hash(password, 10); // Secure password
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();

      const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      return { token, user: newUser };
    },

    loginUser: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User not found");

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new Error("Invalid credentials");

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      return { token, user };
    },
  },
};

module.exports = userResolver;
