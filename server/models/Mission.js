import mongoose from "mongoose";
import { User } from "./user.js";

const missionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 5,
            trim: true
        },

        difficulty: {
            type: String,
            required: true,
            index: true,
            enum: ["easy", "medium", "hard"]
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);


missionSchema.index({difficulty: 1, createdAt: -1});

export const Mission = mongoose.model("Mission", missionSchema);