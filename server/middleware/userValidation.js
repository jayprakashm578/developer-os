import { User } from "../models/user.js";


export async function validateRegister(req, res, next) {
  const { name, email, password } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "name and email are required",
    });
  }

  if (!password) {
    return res.status(400).json({
      error: "password is required",
    });
  }

  if (typeof name !== "string") {
    return res.status(400).json({
      error: "name must be a string",
    });
  }

  if (typeof email !== "string") {
    return res.status(400).json({
      error: "email must be a string",
    });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      error: "email already registered",
    });
  }

  next();
}

export async function verifyLoginCredentials(req, res, next) {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({
      error: "Invalid email or password",
    });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({
      error: "Invalid password",
    });
  }
  req.user = user;
  next();
}
