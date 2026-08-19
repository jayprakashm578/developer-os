// import { missions } from "../data/mission.js";
import {
  createMissionService,
  deleteMissionService,
  getAllMissions,
  getCurrentUserMissionService,
  getMissionByIdService,
  updateMissionService,
} from "../services/missionService.js";

export async function getMissions(req, res, next) {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);

    const limit = Math.min(Math.max(Number(req.query.limit) || 5, 1), 50);

    const { difficulty } = req.query;

    const result = await getAllMissions({
      difficulty: req.query.difficulty,
      search: req.query.search,
      sort: req.query.sort,
      page,
      limit,
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function getMissionById(req, res, next) {
  try {
    const mission = await getMissionByIdService(req.params.id, "createdBy");

    if (!mission) {
      return res.status(404).json({
        error: "Mission not found",
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

    const mission = await createMissionService(req);

    res.status(201).json({
      message: "Mission created successfully",
      mission,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteMission(req, res, next) {
  try {
    const result = await deleteMissionService(req.params.id, req.user._id);

    if (result.notFound) {
      return res.status(404).json({
        error: "Mission not found",
      });
    }

    if (result.forbidden) {
      return res.status(403).json({
        error: "Forbidden",
      });
    }

    res.status(200).json({
      message: "Mission deleted successfully",
      mission: result.mission,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateMission(req, res, next) {
  try {
    const result = await updateMissionService(
      req.params.id,
      req.user._id,
      req.body,
    );

    if (result.notFound) {
      return res.status(404).json({
        error: "Mission not found",
      });
    }

    if (result.forbidden) {
      return res.status(403).json({
        error: "Forbidden",
      });
    }

    res.json({
      message: "Mission replaced successfully",
      mission: result.mission,
    });
  } catch (error) {
    next(error);
  }
}

export async function getCurrentUserMission(req, res, next) {
  try {
    const mission = await getCurrentUserMissionService(req.user._id);

    if (!mission) {
      return res.status(400).json({
        error: "Mission not found",
      });
    }

    return res.json(mission);
  } catch (error) {
    next(error);
  }
}
