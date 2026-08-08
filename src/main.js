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

      <h2>Team Members</h2>
      <ul id="team"></ul>
  
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

//Mission Active button
const heading = document.querySelector("h1");
const subtitle = document.querySelector(".subtitle");
const subHeading = document.querySelector("h2");
const date = document.querySelector(".date");
const startBtn = document.querySelector("#startBtn");

function startMission() {
  heading.textContent = "Mission Started Successfully";
  subtitle.textContent = "We are on a mission to explore the universe ";

  date.style.display = "block";
  // startBtn.disabled = true;
  startBtn.textContent = "Mission Active";

}
// console.log(parseInt(Date.()));




//Mission Promise
function launchMission() {
  return new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        resolve("Mission launched successfully");
      }
      else {
        reject("Mission launch failed");
      }
    }, 2000);
  });
}

launchMission().then((message) => {
  console.log(message);
})
  .catch((error) => {
    console.log(error);
  })

//Converting previous code to async/await
async function launchMissionMessage() {
  try {
    const message = await launchMission();
    console.log(message);
  }
  catch (error) {
    console.log(error);
  }

}

launchMissionMessage();

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

//Fetch user data from jsonplaceholder

async function fetchUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    console.log(data);
   
    let index=0;
     document.getElementById("team").innerHTML=""

    while(index<data.length){
      // console.log(data[index].name)
   
      document.getElementById("team").innerHTML+=`<li>${data[index].name}</li>`
      index++;
    }
  }
  catch (error) {
    console.log(error)
  }

}

fetchUser()


//Mission start click event listener
button.addEventListener("click", () => {
  heading.textContent = "Mission Starting"
  setTimeout(() => {
    heading.textContent = "Loading..."
  }, 200);

  setTimeout(() => {
    heading.textContent = "1 Second"
  }, 500);

  console.log("missioin started")
  setTimeout(() => {
    startMission();
    completeMission();
  }, 1000);

  //SubHeading Mission Countdown
  let count = 4;

  const missionCountdown = setInterval(() => {
    count--;
    subHeading.textContent = "Mission starting in " + count + "...";

    if (count === 0) {
      subHeading.textContent = "Mission Started";
      clearInterval(missionCountdown);
    }
  }, 2000);
});