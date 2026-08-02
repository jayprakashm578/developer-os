import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'
import './app.js'

document.querySelector("#app").innerHTML = `
    <header>
      <h1>Developer OS</h1>
      <P>Project Olympus</P>
    </header>

    <main>
      <h2>Welcome Jayaprakash</h2>

      <p>This is my engineering operating system</p>

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
  document.querySelector("p").textContent = "We are on a mission to explore the universe ";
  document.querySelector("h2").textContent = "Mission Started";  
  document.querySelector(".date").style.display="block";
  document.querySelector("button").disabled=true;
  document.querySelector("#startBtn").textContent="Mission Active";
}
// console.log(parseInt(Date.()));



button.addEventListener("click", startMission);

const dateSpan=document.getElementById("date-display");
const today=new Date();

const formattedDate=today.toLocaleDateString();
dateSpan.textContent=formattedDate;

