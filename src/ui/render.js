import { missions, skills } from "../data/mission";


export function renderSkills() {

  const skillList = skills.map((skill) => `<li>${skill}</li>`).join("");

  document.getElementById("my-skills").innerHTML = "Skills:" + skillList;

}

export function renderMissions() {
     const missionList = missions
        .map(
            (mission, index) =>
                `<li>Mission ${index + 1} - ${mission}</li>`
        )
        .join("");

    document.getElementById("my-missions").innerHTML =
        missionList;

}

export function renderTechnologies(technologies) {

    const technologyList = technologies
        .map(technology => `<li>${technology}</li>`)
        .join("");

    document.getElementById("my-technologies").innerHTML =
        `Technologies:${technologyList}`;
}