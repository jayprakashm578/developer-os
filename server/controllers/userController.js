import { createUserService, loginUserService} from "../services/userService.js";
import jwt from "jsonwebtoken";

//Create a User
export async function createUser(req, res, next) {
  try {
    const { name, email, password} = req.body;
    const user = await createUserService(name, email, password);
    console.log("Created User", user);

    res.status(201).json({
      "message": "User created successfully",
      "user": {
        "id": user._id,
        "name": user.name,
        "email": user.email,
        "role": user.role
      }
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

export function getAdmin(req, res, next) {
  return res.status(200).json({
    userId: req.user._id,
    message: "Admin login successfull"
  })
}