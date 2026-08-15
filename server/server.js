import app from "./app.js";
import { connectDatabase } from "./config/database.js";

const PORT = 3000;

async function startServer() {
    try{
        await connectDatabase();

        app.listen(PORT, () =>{
    console.log(`Developer OS API running on http://localhost:${PORT}`);
})
    }catch(error) {
        console.log("Failed to start server", error);
        
        process.exit(1);
    }
}


startServer();
