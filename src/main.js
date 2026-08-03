import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'
import './app.js'



const user= {
    name:"Jayaprakash",
    goal:"Become a full-stack AI engineer",
    country:"India"
}

const missionCompleted=false;

const skills=["HTML","CSS","JavaScript","Node.js"];


document.querySelector("#app").innerHTML = `
    <header>
      <h1>Developer OS</h1>
      <P class="subtitle">Project Olympus</P>
    </header>

    <main>
      <h2>Welcome ${user.name}</h2>
      <p>Goal: ${user.goal}</p>
      <p>Country: ${user.country}</p>
      <h2>Skills: ${skills.join(", ")}</h2>
      <h2 class="date" style="display:none">Date: <span id="date-display"></span></h2>

      <p>This is my engineering operating system</p>
      <p class="status"></p>
      <button id="startBtn">Start Mission</button>
    </main>
    `

const button=document.querySelector("#startBtn");
console.log(button)

function greet() {
  console.log("Welcome");
}

greet();

function startMission() {
  document.querySelector("h1").textContent = "Mission Started Succesfully";
  document.querySelector(".subtitle").textContent = "We are on a mission to explore the universe ";
  document.querySelector("h2").textContent = "Mission Started";  
  document.querySelector(".date").style.display="block";
  document.querySelector("#startBtn").disabled=true;
  document.querySelector("#startBtn").textContent="Mission Active";
}
// console.log(parseInt(Date.()));



button.addEventListener("click", startMission);

const dateSpan=document.getElementById("date-display");
const today=new Date();

const formattedDate=today.toLocaleDateString();
dateSpan.textContent=formattedDate;

if(missionCompleted) {
  document.querySelector(".status").textContent="Mission Completed";
}
else{
    document.querySelector(".status").textContent="Mission in Progress";
}