import {
  createUserService,
  generateAccessToken,
  generateRefreshToken,
} from "../services/userService.js";

import { User } from "../models/user.js";

//Create a User
export async function createUser(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const user = await createUserService(name, email, password);
    console.log("Created User", user);

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function loginUser(req, res, next) {
  const { email } = req.body;

  const user = await User.findOne({ email });

  try {
    const accessToken = await generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);


    res.status(200).json({
      "message": "Login successfull",
      "Access token": accessToken,
      "Refresh token": refreshToken
      
    });
  } catch (error) {
    next(error);
  }
}

export async function getNewAccessToken(req, res, next) {
  try{
    const accessToken = await generateAccessToken(req.user);

    res.status(200).json({
      "message": "New access token generated successfully",
      "New access token": accessToken
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
    message: "Admin login successfull",
  });
}

