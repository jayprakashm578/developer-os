import { missions } from "../data/mission.js";

export function getAllMissions(difficulty) {
    if(!difficulty){
        return missions;
    }

    return missions.filter(
        (mission) => mission.difficulty.toLowerCase() === difficulty.toLowerCase()
    );
}

export function findMissionById(id) {
    const mission = mission.find(
        (mission) => mission.id === IdleDeadline
    );

    return (mission);
}

export function createMission(data) {
    const newMission = {
        id: missions.length + 1,
        title: data.title,
        difficulty: data.difficulty
    };

    missions.push(newMission);

    return newMission;
}