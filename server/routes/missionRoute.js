import express from "express";

import { getMissions, getMissionById, createMission, deleteMission, updateMission} from "../controllers/missionController.js";

const missionRoutes = express.Router();

missionRoutes.get("/", getMissions);

missionRoutes.get("/:id", getMissionById);

missionRoutes.post("/", createMission);

missionRoutes.delete("/:id", deleteMission);

missionRoutes.put("/:id", updateMission)


export default missionRoutes;