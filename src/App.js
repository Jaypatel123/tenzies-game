import React, { useState } from "react";
import Die from "./Components/Die"

import "./App.css";
function App() {
  const [diceNumber, isDiceNumber] = useState(allNewDice());
  function allNewDice(){
      let newDice = []
      for(let i=0; i<10; i++){
        newDice.push(Math.ceil(Math.random() * 6))
      }
      return newDice
  };

  function diceRolled(){
    
  }

  // const allNewDice = () => {
  //   console.log(Math.floor(Math.random()* 6) + 1)
  // }

  const diceElements = diceNumber.map(die=><Die value={die}/>)
  return (
    <div className="App">
      <main>
        <div className="dice-container">
          {diceElements} 
        </div>
        <button className="dice-rolled" onClick={diceRolled}> Roll</button>
      </main>
    </div>
  );
}

export default App;
