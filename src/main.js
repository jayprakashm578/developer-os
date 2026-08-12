import './style.css'
import { user, appVersion } from './data/user.js'
import { missions, skills } from './data/mission.js'
import { technologies } from './data/technologies.js'

import { renderMissions, renderSkills, renderTechnologies } from './ui/render.js'

import { initTeam } from './features/team.js'

import { initMission } from './features/missionFeature.js'

document.querySelector("#app").innerHTML = `
    <header>
      <h1>Developer OS v${appVersion}</h1>
      <P class="subtitle">Project Olympus</P>
    </header>

    <main>
      <h2>Welcome ${user.name}</h2>
      <p>Goal: ${user.goal}</p>
      <p>Country: ${user.country}</p>

      <h2>Team Members</h2>

      <p id="loading">Loading team members...</p>

      <ul id="team"></ul>

      <button id="reload">Reload Team</button>
  
         <ul id='my-skills'> </ul>

         <ul id='my-technologies'> </ul>

      <h2 class="date" style="display:none">
      Date: <span id="date-display"></span>
      </h2>

      <p>This is my engineering operating system</p>

      <p>My Total Missions: ${missions.length}</p>

      <p id="mission-counter"></p>

      <ul id="my-missions"></ul>

      <p class="status"></p>

      <button id="startBtn">
      Start Mission
      </button>

    <form id="missionForm">

       <label for="missionTitle">Mission Name:</label>
       <input type="text" id="missionTitle" placeholder="Mission name" required>
       <span id="missionTitle-error" style="color: red; display: none;"></span>

      <br>

      <label for="technologyTitle">Technology:</label>
      <input type="text" id="technologyTitle" placeholder="Technology name" required>
       <span id="technologyTitle-error" style="color: red; display: none;"></span>

      <br>

      <label for="difficultyTitle">Difficulty:</label>
      <select name="difficulty" id="difficultyTitle" required>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

          <br>

      <button type="submit" id="deployMissionBtn">
        Deploy Mission
      </button>
    
     </form>

    <p id="deployMissionResult"></p>
    </main>
    `

renderSkills(skills);
renderMissions(missions);
renderTechnologies(technologies);



initTeam();
initMission();