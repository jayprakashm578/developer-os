import express from "express";

import missionRoutes from "./routes/missionRoute.js";

const app = express();

app.use(express.json());

app.use((req, res, next) =>{
    console.log(`${req.method} ${req.url}`);

    next();
});

app.use("/api/missions", missionRoutes);

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

app.use((req,res) =>{
    res.status(404).json({
        error: "Route not found"
    });
});

export default app;