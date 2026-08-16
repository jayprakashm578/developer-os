import mongoose from "mongoose";

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
            enum: ["easy", "medium", "hard"]
        }
    },
    {
        timestamps: true
    }
);

export const Mission = mongoose.model("Mission", missionSchema);