import { Mission } from "../models/Mission.js";

export async function getAllMissions({
  difficulty,
  search,
  sort,
  page = 1,
  limit = 5,
}) {
  const filter = {};

  if (difficulty) {
    filter.difficulty = difficulty.toLowerCase();
    // difficulty: "hard"
  }

  if (search) {
    filter.title = {
      $regex: search,
      $options: "i",
    };
  }

  let sortValue;
  if (sortValue === "newest") {
    sortValue = { createdAt: -1 };
  }

  if (sortValue === "oldest") {
    sortValue = { createdAt: 1 };
  }

  const skip = (page - 1) * limit;

  const [missions, total] = await Promise.all([
    Mission.find(filter)
      .populate("createdBy")
      .sort(sortValue)
      .skip(skip)
      .limit(limit)
      .lean(),

    Mission.countDocuments(filter),
  ]);

  return {
    missions,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getMissionByIdService(id, populateField = "") {
  return Mission.findById(id).populate(populateField);
}

//Create a mission
export async function createMissionService(req) {
  const { title, difficulty } = req.body;
  return Mission.create({
    title,
    difficulty,
    createdBy: req.user._id,
  });
}

//Update a Mission
export async function updateMissionService(missionId, userId, data) {
  const mission = await Mission.findById(missionId);

  if (!mission) {
    return { notFound: true };
  }

  if (!mission.createdBy.equals(userId)) {
    return { forbidden: true };
  }

  mission.title = data.title;
  mission.difficulty = data.difficulty;

  await mission.save();

  return { mission };
}

//Delete a mission
export async function deleteMissionService(missionId, userId) {
  const mission = await Mission.findById(missionId);

  if (!mission) {
    return { notFound: true };
  }

  if (!mission.createdBy.equals(userId)) {
    return { forbidden: true };
  }
  
  await Mission.findByIdAndDelete(missionId);

  return {
    deleted: true,
    mission,
  };
}

//Get current user missions
export async function getCurrentUserMissionService(id) {
  return Mission.find({ createdBy: id }).populate("createdBy");
}
