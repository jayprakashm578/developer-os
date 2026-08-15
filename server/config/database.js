import mongoose from "mongoose";

export async function connectDatabase() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/developer-os");

        console.log("MongoDB connected");
    } catch(error) {
        console.log("MongoDB connection failed", error.message);

        process.exit(1);
    }
}