import express from "express";
import { validateUser } from "../middleware/authMiddleware.js";
import { requireAdmin } from "../middleware/adminMiddleware.js";
import { getMissions } from "../controllers/missionController.js";
import { getAdmin } from "../controllers/userController.js";

const adminRoutes = express.Router();

adminRoutes.get("/test", validateUser, requireAdmin, getAdmin)

adminRoutes.get("/missions", validateUser, requireAdmin, getMissions)

export default adminRoutes;