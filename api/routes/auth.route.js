// api/routes/auth.route.js
import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Define route for user signup
router.post("/signup", signup);

export default router;
