import { missions } from "../data/mission.js";
import { createMission, findMissionById, getAllMissions } from "../services/missionService.js";


export function getMissions(req, res){
     const { difficulty } = req.query;
    console.log(difficulty);

    const missons = getAllMissions(difficulty);

    res.json(missions);
}

export function getMissionById(req, res) {

    const id = Number(req.params.id);

    const mission = findMissionById(id);

    if (!mission) {
        return res.status(404).json({
            error: "Mission not found"
        });
    }

    res.json(mission);
}

export function createMissions(req, res){
    console.log("Received Mission: ", req.body);

    const mission = createMission(req.body);

    res.status(201).json({
        message: "Mission received",
        mission: req.body                           
    });
}

export function deleteMission(req, res) {

    const id = Number(req.params.id);

    const missionIndex = missions.findIndex(
        (mission) => mission.id === id
    );

    if (missionIndex === -1) {
        return res.status(404).json({
            error: "Mission not found"
        });
    }

    const deletedMission = missions.splice(missionIndex, 1)[0];

    res.status(200).json({
        message: "Mission deleted successfully",
        mission: deletedMission
    });
}

export function updateMission(req, res) {
    const id = Number(req.params.id);
    const {title, difficulty} =req.body;

    
    if(!title || !difficulty){
        return res.status(400).json({
            error: "Missing required fields: title, difficulty"
        })
    }
    
    const missionIndex = missions.findIndex(
        (mission) => mission.id === id
    );

    if(missionIndex === -1){
        return res.status(404).json({
            error: "Mission not found"
        });
    }

   missions[missionIndex] = {
   ...missions[missionIndex],
    title,
    difficulty
   } ;

   res.json({
    message: "Mission replaced successfully",
    data: missions[missionIndex]
   });
}