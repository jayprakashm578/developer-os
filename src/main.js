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

      <button>Start Mission</button>
    </main>
    `

