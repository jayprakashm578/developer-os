export function validateMission(req, res, next) {
  const { title, difficulty, createdBy } = req.body;

  if (!title || !difficulty) {
    return res.status(400).json({
      error: "title and difficulty are required",
    });
  }

//   if (!createdBy) {
//     return res.status(400).json({
//       error: "createdBy is required",
//     });
//   }

  if (typeof title !== "string") {
    return res.status(400).json({
      error: "title must be a string",
    });
  }

  if (title.trim().length < 5) {
    res.status(400).json({
      error: "title must contain at least 5 characters",
    });
  }

  const validDifficulties = ["easy", "medium", "hard"];

  if (!validDifficulties.includes(difficulty.toLowerCase())) {
    res.status(400).json({
      error: "invalid difficulty",
    });
  }

  if (typeof difficulty !== "string") {
    return res.status(400).json({
      error: "difficulty must be a string",
    });
  }

  next();
}
