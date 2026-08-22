import express from "express";
import {  verifyLoginCredentials, validateRegister } from "../middleware/userValidation.js";
import { createUser, getCurrentUser, getNewAccessToken, loginUser } from "../controllers/userController.js";
import { validateRefreshToken, validateUser } from "../middleware/authMiddleware.js";


const userRoutes = express.Router();

userRoutes.post("/register", validateRegister, createUser);

userRoutes.post("/login",verifyLoginCredentials, loginUser);

userRoutes.get("/me",validateUser, getCurrentUser);

userRoutes.post("/refresh", validateRefreshToken, getNewAccessToken);

export default userRoutes;