import express from "express";

import missionRoutes from "./routes/missionRoute.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFound } from "./middleware/notFound.js";
import userRoutes from "./routes/userRoute.js";

const app = express();

app.use(express.json());

app.use((req, res, next) =>{
    console.log(`${req.method} ${req.url}`);

    next();
});

app.use("/api/missions", missionRoutes);
app.use("/api/user", userRoutes)


app.get("/", (req, res) =>{
    res.send("Developer OS Express backend.")
});

app.get("/api/status", (req, res) =>{
    res.json({
        status: "running",
        day: 16
    });
});

app.get("/api/user", (req, res) =>{
    res.json({
        user: "Jayaprakash",
        goal: "Become a full stack AI engineer"
    });
});

app.get("/api/test-error", (req, res, next) =>{
    next(new Error("Database connection failed"));
})

app.use(notFound);

app.use(errorHandler);

export default app;