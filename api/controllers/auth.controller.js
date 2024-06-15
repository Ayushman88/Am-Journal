import User from "../models/user.model.js"; // Ensure the correct path to your User model
import bcrypt from "bcryptjs"; // Corrected import statement

export const signup = async (req, res) => {
  const { userName, password, email } = req.body;

  if (
    !userName ||
    !password ||
    !email ||
    userName === "" ||
    password === "" ||
    email === ""
  ) {
    return res.status(400).json({ message: "All fields must be provided" });
  }

  try {
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.json({ message: "User saved successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
