import { User } from "../models/user.js"
import jwt from "jsonwebtoken";
import "dotenv/config"

//Create a User
export async function createUserService(name, email, password) {
    return User.create({
        name,
        email,
        password
    })
}

export async function loginUserService(data) {
    const {email} = data;
    const user = await User.findOne({email});
    const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )

    return token;
}