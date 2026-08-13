import { error } from "node:console";
import http from "node:http";
import { url } from "node:inspector";
import { URL } from "node:url";

const missions = [
    "Learn JavaScript",
    "Master Node.js",
    "Learn Express",
    "Learn MongoDB"
];

const user = {
    name: "Jayaprakash",
    goal: "Become a full-stack AI engineer"
};


const server = http.createServer((req, res) => {
    const baseURL = `http://{req.headers.host}`;
    const parsedURL = new URL(req.url, baseURL);

    const pathname = parsedURL.pathname;

    // Home route
    if (req.method === "GET" && req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });

        res.end("Developer OS Backend");

        return;
    }

    // Status route

    const searchParams = parsedURL.searchParams;
    // console.log(searchParams)

    if (req.method === "GET" && pathname === "/api/status") {
        const name = searchParams.get('name');


        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            status: "running",
            day: 15,
            name: `${name}`
        }));
        console.log({
            method: req.method,
            url: req.url,
            headers: req.headers,
        });

        return;
    }



    // Missions route
    // if (req.method === "GET" && req.url === "/api/missions") {

    //     res.writeHead(200, {
    //         "Content-Type": "application/json"
    //     });

    //     res.end(JSON.stringify(missions));

    //     return;
    // }



    //Server Side
    if (req.method === "POST" && pathname === "/api/missions") {
        let rawData = "";

        req.on("data", (chunk) => {
            rawData += chunk.toString()
        });

        req.on("end", () => {
            try {
                const { title, difficulty } = JSON.parse(rawData);

                //Validate fields
                if (!title || !difficulty) {
                    res.writeHead(400, { "Content-Type": "application/json" });

                    return res.end(JSON.stringify({
                        error: "Missing required field: title and difficulty are required"
                    }));
                }

                //Process Valid
                res.writeHead(201, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({
                    message: "Mission received",
                    "mission": {
                       title,
                       difficulty
                    }
                }));
            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({
                    error: "Invalid JSON body"
                }));
            }
        })
    }
    else {
       // 404

        res.writeHead(404, {
            "Content-Type": "application/json",

        });

        res.end(JSON.stringify({
            error: "Route not found"
        }));
    }
    // User route
    if (req.method === "GET" && req.url === "/api/user") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(user));

        return;
    }




});

server.listen(3000, () => {
    console.log("Developer OS backend running on http://localhost:3000");
});