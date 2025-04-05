//Task 1 - Create Greeting Component

//This is a functional React component that shows a greeting message
//It will be used inside App.jsx to display a custom greeting
import React from "react";

//This function creates the Greeting component
function Greeting() {
    return (
      <div>
        {/* Title of the greeting message */}
        <h2>Hello from the Greeting Component!</h2>
        {/* Description under the title */}
        <p>This is your first custom component in React.</p>
      </div>
    );
}

//Exporting the Greeting component so it can be used in App.jsx
export default Greeting;