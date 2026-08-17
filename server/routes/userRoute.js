import express from "express";
import { validateUser } from "../middleware/validateUser.js";
import { createUser } from "../controllers/missionController.js";

const userRoutes = express.Router();

userRoutes.post("/", validateUser, createUser);

export default userRoutes;