import { createMission } from "../services/api.js";
import { validateMissionTitle, validateTechnology } from "../utils/validation.js";


export function initMission() {
    const heading = document.querySelector("h1");
    const subtitle = document.querySelector(".subtitle");
    const subHeading = document.querySelector("main h2");
    const date = document.querySelector(".date");
    const startBtn = document.querySelector("#startBtn");
    let missionCount = 0;
    let missionInitialized = false;

    const missionForm = document.querySelector("#missionForm");

    const missionTitle = document.querySelector("#missionTitle");

    const technologyTitle = document.querySelector("#technologyTitle");

    const difficultyTitle = document.querySelector("#difficultyTitle");

    const missionTitleError = document.querySelector("#missionTitle-error");

    const technologyTitleError = document.querySelector("#technologyTitle-error");

    const deployMissionResult = document.querySelector("#deployMissionResult");

    const missionCounter = document.querySelector("#mission-counter");

    // Mission counter
    function completeMission() {
        missionCount++;

        missionCounter.textContent = `Mission Counter: ${missionCount}`;
    }

    const dateSpan = document.getElementById("date-display");
    const today = new Date();

    const formattedDate = today.toLocaleDateString();
    dateSpan.textContent = formattedDate;


    function initializeMissionUI() {

        if (missionInitialized) {
            return;
        }

        missionInitialized = true;

        heading.textContent = "Mission Starting";

        let countdown = 3;

        subHeading.textContent = `Mission starting in ${countdown}...`;

        const missionCountdown = setInterval(() => {

            countdown--;

            if (countdown > 0) {

                subHeading.textContent = `Mission starting in ${countdown}...`;

                return;
            }

            clearInterval(missionCountdown);

            subHeading.textContent = "Mission Started";

            heading.textContent = "Mission Started Successfully";

            subtitle.textContent = "We are on a mission to explore the universe";

            date.style.display = "block";

            startBtn.textContent = "Mission Active";

        }, 1000);
    }

    // Start Mission
    startBtn.addEventListener("click", () => {

        initializeMissionUI();

        completeMission();

    });

    // Mission Form
    missionForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        // Reset previous UI errors
        missionTitleError.style.display = "none";
        technologyTitleError.style.display = "none";

        missionTitle.style.borderColor = "";
        technologyTitle.style.borderColor = "";

        deployMissionResult.textContent = "";

        // Read values
        const title = missionTitle.value.trim();

        const technology = technologyTitle.value.trim();

        const difficulty = difficultyTitle.value;

        // Validate mission title
        const titleError = validateMissionTitle(title);

        if (titleError) {

            missionTitleError.textContent = titleError;

            missionTitleError.style.display = "block";

            missionTitle.style.borderColor = "red";

            return;
        }

        // Validate technology
        const technologyError = validateTechnology(technology);

        if (technologyError) {

            technologyTitleError.textContent = technologyError;

            technologyTitleError.style.display = "block";

            technologyTitle.style.borderColor = "red";

            return;
        }

        // Create mission object
        const mission = {
            title,
            technology,
            difficulty,
            status: "Ready"
        };

        try {

            deployMissionResult.textContent = "Deploying Mission...";

            const data = await createMission(mission);

            console.log("Mission created:", data);

            deployMissionResult.innerHTML = `Mission deployed successfully!<br>Mission ID: ${data.id}`;

            missionForm.reset();

        } catch (error) {

            console.error(error);

            deployMissionResult.textContent = `Failed: ${error.message}`;

        }

    }
    );
}