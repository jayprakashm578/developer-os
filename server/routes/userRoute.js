import express from "express";
import {  verifyLoginCredentials, validateRegister } from "../middleware/userValidation.js";
import { createUser, getCurrentUser, loginUser } from "../controllers/userController.js";
import { validateUser } from "../middleware/authMiddleware.js";


const userRoutes = express.Router();

userRoutes.post("/register", validateRegister, createUser);

userRoutes.post("/login",verifyLoginCredentials, loginUser);

userRoutes.get("/me",validateUser, getCurrentUser)

export default userRoutes;