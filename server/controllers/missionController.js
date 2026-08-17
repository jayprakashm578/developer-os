// import { missions } from "../data/mission.js";
import { createMissionService, createUserService, deleteMissionService, getAllMissions, getMissionByIdService, updateMissionService } from "../services/missionService.js";


export async function getMissions(req, res, next) {
    try {
        const page = Math.max(Number(req.query.page) || 1, 1);

        const limit = Math.min(Math.max(Number(req.query.limit) || 5, 1), 50)

        const { difficulty } = req.query;

        const result = await getAllMissions({
            difficulty: req.query.difficulty,
            search: req.query.search,
            sort: req.query.sort,
            page,
            limit
        });

        res.json(result);

    } catch (error) {
        next(error);
    }
}

export async function getMissionById(req, res, next) {
    try {
        const mission = await getMissionByIdService(req.params.id, 'createdBy');

        if (!mission) {
            return res.status(404).json({
                error: "Mission not found"
            });
        }
        res.json(mission);

    } catch (error) {
        next(error);
    }
}

export async function createMission(req, res, next) {
    try {

        console.log("Received Mission: ", req.body);

        const mission = await createMissionService(req.body);

        res.status(201).json({
            message: "Mission created successfully",
            mission
        });
    } catch (error) {
        next(error);
    }
}

export async function deleteMission(req, res, next) {
    try {

        const mission = await deleteMissionService(req.params.id);

        if (!mission) {
            return res.status(404).json({
                error: "Mission not found"
            });
        }

        res.status(200).json({
            message: "Mission deleted successfully",
            mission
        });
    } catch (error) {
        next(error);
    }
}

export async function updateMission(req, res, next) {
    try {

        const mission = await updateMissionService(req.params.id, req.body)

        if (!mission) {
            return res.status(404).json({
                error: "Mission not found"
            });
        }

        res.json({
            message: "Mission replaced successfully",
            mission
        });
    } catch (error) {
        next(error);
    }
}

//Create a User
export async function createUser(req, res, next) {
    console.log("Created User", req.body)
    try{
        const user = await createUserService(req.body);

        res.status(201).json({
            message: "User created successfully",
            user
        })
    } catch (error) {
        next(error);
    }
}