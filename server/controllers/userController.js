import { createUserService, loginUserService} from "../services/authService.js";
import jwt from "jsonwebtoken";

//Create a User
export async function createUser(req, res, next) {
  try {
    const user = await createUserService(req.body);
    console.log("Created User", user);

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
}

export async function loginUser(req, res, next) {
  try {
    const token = await loginUserService(req.body);
    res.status(200).json({
      message: "Login successfull",
      token,
    });
  } catch (error) {
    next(error);
  }
}

export function getCurrentUser(req, res, next) {
  return res.status(200).json({
    userId: req.user._id,
    message: "Successfully verified",
  });
}
