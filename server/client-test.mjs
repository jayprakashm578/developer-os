async function courseData() {
    try{

        const response = await fetch("http://localhost:3000/api/missions", {
            method: "POST",
            
            headers: {
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify({
                "title": "Learn Express",
                "difficulty": "Hard"
            })
        });
        
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("Error connecting to server:",error)
    }
    }
    
    courseData();