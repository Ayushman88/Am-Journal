import User from "../models/user.model.js"; // Ensure the correct path to your User model
import bcrypt from "bcryptjs"; // Corrected import statement
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { userName, password, email } = req.body;

  if (
    !userName ||
    !password ||
    !email ||
    userName === "" ||
    password === "" ||
    email === ""
  ) {
    next(errorHandler(400, "All fields must be provided"));
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User saved successfully" });
  } catch (error) {
    next(error);
  }
};
