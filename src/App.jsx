//Task 2 - Use Greeting Component in App.jsx

//This is the main component of the React app. It shows logos, a counter button, and the Greeting component
import React from "react";

//React logo image
import reactLogo from "./assets/react.svg";

//Vite logo image
import viteLogo from "/vite.svg";

//useState helps manage the count state (the number that goes up when clicking the button)
import { useState } from "react";

//This is the main CSS file for styling the app
import "./App.css";

//Greeting component is imported from the components folder
import Greeting from "./components/Greeting";

//This is the main function that defines the App component
function App() {
  //count holds the current number shown on the button
  //setCount updates the count when the button is clicked
  const [count, setCount] = useState(0);
  return (
  <>
    <div>
      <div>
        {/* Logos that link to the Vite and React websites */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      {/* Main title for the app */}
      <h1>Vite + React</h1>
      
      {/* This is the main content of the app */}
      <div className="card">
        {/* When the button is clicked, the number goes up by 1 */}
       <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
       </button>
       
       {/* This shows the Greeting component below the button */}
       <Greeting />
       
       {/* This message tells the user to click on the logos */}
       <p className="read-the-docs">
        Click on the Vite and React logos to learn more
       </p>
      </div>
    </div>
  </>
  );
}

//Exporting the App component so it can be used in other files
export default App;
