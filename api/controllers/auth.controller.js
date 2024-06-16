// api/controllers/auth.controller.js
import User from "../models/user.model.js"; // Ensure the correct path to your User model
import bcrypt from "bcryptjs"; // Corrected import statement
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { userName, password, email } = req.body;

  // Validate incoming data
  if (
    !userName ||
    !password ||
    !email ||
    userName === "" ||
    password === "" ||
    email === ""
  ) {
    return next(errorHandler(400, "All fields must be provided"));
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: "User saved successfully" });
  } catch (error) {
    // Pass any error to the error handling middleware
    next(error);
  }
};
