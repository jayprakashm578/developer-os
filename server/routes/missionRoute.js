import express from "express";

import { getMissions, getMissionById, createMissions, deleteMission, updateMission} from "../controllers/missionController.js";

import { validateMission } from "../middleware/validateMission.js";

const missionRoutes = express.Router();

missionRoutes.get("/", getMissions);

missionRoutes.get("/:id", getMissionById);

missionRoutes.post("/", validateMission, createMissions);

missionRoutes.delete("/:id", deleteMission);

missionRoutes.put("/:id", updateMission)


export default missionRoutes;