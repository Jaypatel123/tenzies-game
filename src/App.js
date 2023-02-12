import React, { useState } from "react";
import Die from "./Components/Die";
import { nanoid } from "nanoid";

import "./App.css";
function App() {
  const [diceNumber, isDiceNumber] = useState(allNewDice());
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: true
      });
    }
    return newDice;
  }

  function diceRolled() {
    isDiceNumber(allNewDice);
  }
  const diceElements = diceNumber.map((die) => (
    <Die key={die.id} value={die.value} isHeld = {die.isHeld}/>
  ));
  return (
    <div className="App">
      <main>
        <div className="dice-container">{diceElements} </div>
        <button className="dice-rolled" onClick={diceRolled}>
          Roll
        </button>
      </main>
    </div>
  );
}

export default App;
