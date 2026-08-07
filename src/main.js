import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'
import './app.js'



const user = {
  name: "Jayaprakash",
  goal: "Become a full-stack AI engineer",
  country: "India"
}

const missionCompleted = false;

// function greetUser(name)
// {
//   return `Welcome ${name}`;
// }

const greetUser = (name) => {
  return `Welcome ${name}`;
}

const multiply = function (a, b) {
  return a * b;
}
console.log(multiply(5, 8));

//Global variable
const appVersion = "1.0";


//Functon scope
function calculateProgress() {
  let completed = 2;
  console.log(completed);
}

calculateProgress();
// console.log(completed);  It throws an error because completed is defined inside the function and cannot be accessed outside of it.

//Block Scope
if (true) {
  let mission = "Learn React";
}
// console.log(mission); This throws an error because mission is defined inside the if block and cannot be accessed outside of it.






//Hoisting
sayHello();

function sayHello() {
  console.log("Hello");

}

// sayHi(); // This will throw an error because sayHi is defined as a function expression and is not hoisted.

const sayHi = function () {
  console.log("Hi");
}

//this
const profile = {
  name: "Jayaprakash",
  greet: function () {
    console.log(this.name);
  }
};
profile.greet(); // This will log "Jayaprakash" because this refers to the profile object.

//Missions
const missions = [
  "Learn Javascript",
  "Master Node.js",
  "Learn Express",
  "Learn MongoDB"
]

function totalMissions(array) {
  return array.length;
}

document.querySelector("#app").innerHTML = `
    <header>
      <h1>Developer OS v${appVersion}</h1>
      <P class="subtitle">Project Olympus</P>
    </header>

    <main>
      <h2>${greetUser(user.name)}</h2>
      <p>Goal: ${user.goal}</p>
      <p>Country: ${user.country}</p>
  
         <ul id='my-skills'> </ul>
         <ul id='my-technologies'> </ul>
      <h2 class="date" style="display:none">Date: <span id="date-display"></span></h2>

      <p>This is my engineering operating system</p>
      <p>My Total Missions: ${totalMissions(missions)}</p>
      <p id="mission-counter"></p>
      <ul id="my-missions"></ul>
      <p class="status"></p>
      <button id="startBtn">Start Mission</button>
    </main>
    `

//Closures
function createMissionCounter() {
  let count = 0;
  return function () {
    count++;
    console.log("Completed", count);
    document.querySelector("#mission-counter").textContent = "Mission Counter:" + count;

  }
}
const completeMission = createMissionCounter();
// completeMission();
// completeMission();
// completeMission();

//Skills    
const skills = ["HTML", "CSS", "JavaScript", "Node.js"];

function renderSkills() {

  // let skillList="";

  // for (let skill of skills) {
  //   skillList+=`<li>${skill}</li>`;
  // }


  //Using map function to render skills
  const skillList = skills.map((skill) => `<li>${skill}</li>`).join("");
  document.getElementById("my-skills").innerHTML = "Skills:" + skillList;

}

renderSkills();

skills.push("Git");

renderSkills();

for (let i = 0; i < skills.length; i++) {
  if (skills[i] === "JavaScript") {
    // console.log("Favourite skill "+`${skills[i]}`)
  }
  else {
    // console.log(`Learning ${skills[i]}`);
  }
}

function hasSkill(skill) {
  return skills.includes(skill);
}

console.log(hasSkill("Node.js"));
console.log(hasSkill("Python"));


function renderMissions() {
  let missionList = ""
  let a = 1;
  for (let mission of missions) {
    missionList += `<li>Mission ${a}  - ${mission}</li>`;
    a += 1;
  }

  document.getElementById("my-missions").innerHTML = missionList;

}

renderMissions();


function executeMission(callback) {
  console.log("Mission Started");
  callback();
  console.log("Mission Completed");
}

executeMission(function () {
  console.log("Learning JavaScript");
})

//Technologies
const technologies = ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"];

// const technologyArray=technologies.map((tech)=>` <li>${tech}</li>`);
// document.getElementById("my-technologies").innerHTML="Technologies: "+technologyArray.join("");

document.getElementById("my-technologies").innerHTML = "Technologies: " + technologies.map((tech) => ` <li>${tech}</li>`).join("");


let upperCase = technologies.map((tech) => tech.toUpperCase())
// console.log("UpperCase Technologies: "+upperCase);

let techLength = technologies.filter((tech) => tech.length > 5);
// console.log("Technologies with Length greater than 5: "+techLength);

let searchTech = technologies.find((tech) => tech === "Node.js");
// console.log("Found: "+searchTech);

if (technologies.includes("React")) {
  // console.log("React installed.");
}
else {
  // console.log("React not installed.");
}

// technologies.forEach((tech)=>console.log("Learning "+tech));

const button = document.querySelector("#startBtn");
// console.log(button)

// function greet() {
//   console.log("Welcome");
// }

const greet = () => {
  console.log("Welcome");
}
greet();

function startMission() {
  document.querySelector("h1").textContent = "Mission Started Successfully";
  document.querySelector(".subtitle").textContent = "We are on a mission to explore the universe ";
  document.querySelector("h2").textContent = "Mission Started";
  document.querySelector(".date").style.display = "block";
  // document.querySelector("#startBtn").disabled = true;
  document.querySelector("#startBtn").textContent = "Mission Active";

}
// console.log(parseInt(Date.()));



button.addEventListener("click",()=>{
  startMission();
  completeMission();
} );

const dateSpan = document.getElementById("date-display");
const today = new Date();

const formattedDate = today.toLocaleDateString();
dateSpan.textContent = formattedDate;

if (missionCompleted) {
  document.querySelector(".status").textContent = "Mission Completed";
}
else {
  document.querySelector(".status").textContent = "Mission in Progress";
}


for (let i = 1; i <= 5; i++) {
  if (i === 1) {
    // console.log("Mission Started...")
  }
  // console.log(i);
  if (i === 5) {
    // console.log("Mission Complete")
  }
}