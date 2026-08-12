const API_BASE_URL ="https://jsonplaceholder.typicode.com";

export async function fetchTeamMembers() {

    const response = await fetch(`${API_BASE_URL}/users`);

    if (!response.ok) {
        throw new Error(
            `HTTP Error: ${response.status}`
        );
    }

    return await response.json();
}

//Create Mission 
export async function createMission(mission) {

    const response = await fetch(`${API_BASE_URL}/posts`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mission)
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
}