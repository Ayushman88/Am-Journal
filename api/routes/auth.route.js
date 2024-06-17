// api/routes/auth.route.js
import express from "express";
import { signup, signin, google } from "../controllers/auth.controller.js";

const router = express.Router();

// Define route for user signup
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);

export default router;
