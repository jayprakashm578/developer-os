import express from "express";

import { getMissions, getMissionById, createMission, deleteMission, updateMission, getCurrentUserMission} from "../controllers/missionController.js";

import { validateMission } from "../middleware/validateMission.js";
import { validateUser } from "../middleware/authMiddleware.js";

const missionRoutes = express.Router();

missionRoutes.get("/", getMissions);

missionRoutes.get("/my", validateUser, getCurrentUserMission)

missionRoutes.get("/:id", getMissionById);

missionRoutes.post("/",validateUser, validateMission, createMission);

missionRoutes.delete("/:id",validateUser, deleteMission);

missionRoutes.put("/:id",validateUser,validateMission, updateMission);




export default missionRoutes;