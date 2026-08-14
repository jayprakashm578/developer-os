import express from "express";

const app = express();

app.use(express.json());

//Midelware

app.use((req, res, next) =>{
    console.log(req.method, req.url);
    next();
})




//Routes

app.get("/", (req, res) => {
    res.send("Developer os Express backend")
})

app.get("/api/status", (req, res) => {
    const name = req.query.name;

    res.json({
        status: "running",
        day: 16,
        name: name || "Guest"
    });
})

app.get("/api/missions", (req, res) => {
    res.json([
        "Learn JavaScript",
        "Master Node.js",
        "Learn Express",
        "Learn MongoDB"
    ]);
})

app.get("/api/user", (req, res) =>{
    res.json({
        user: "Jayaprakash",
        goal: "Become a full stack AI engineer"
    })
})

//Route Parameters

app.get("/api/missions/:id", (req, res) => {
    res.json({
        missionID: req.params.id
    });
});

//Post request

app.post("/api/missions", (req, res) =>{
    console.log(req.body);
    
    res.status(201).json({
        message: "Mission received",
        mission: req.body
    });
});

//404
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

//Start server
app.listen(3000, () => {
    console.log("Developer os Express API is running on http://localhost:3000");
})