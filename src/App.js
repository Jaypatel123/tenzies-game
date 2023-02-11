import React, { useState } from "react";
import Die from "./Components/Die"

import "./App.css";
function App() {
  const [diceNumber, isDiceNumber] = useState(1);
  return (
    <div className="App">
      <main>
        <div>
          <Die value='1'/>  
          <Die value='1'/>        
          <Die value='1'/>        
          <Die value='1'/>        
          <Die value='1'/>        
          <Die value='1'/>        
          <Die value='1'/>        
          <Die value='1'/>        
          <Die value='1'/>        
          <Die value='1'/>        
        </div>
      </main>
    </div>
  );
}

export default App;
