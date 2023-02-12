import React, { useState } from "react";
import Die from "./Components/Die";

import "./App.css";
function App() {
  const [diceNumber, isDiceNumber] = useState(allNewDice());
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      })
    }
    return newDice;
  }

  function diceRolled(){
    isDiceNumber(allNewDice)
  }

  const diceElements = diceNumber.map(die=><Die value={die.value}/>)
  return (
    <div className="App">
      <main>
        <div className="dice-container">{diceElements} </div>
        <button className="dice-rolled" onClick={diceRolled}> Roll</button>
      </main>
    </div>
  );
}

export default App;
