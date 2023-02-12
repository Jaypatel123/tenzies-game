import React, { useState } from "react";
import Die from "./Components/Die";
import { nanoid } from "nanoid";

import "./App.css";
function App() {
  const [diceNumber, isDiceNumber] = useState(allNewDice());

  function generateNewDice(){
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  }

  function diceRolled() {

    isDiceNumber(preNum => preNum.map(die=> die.isHeld ? die : generateNewDice()));
  }

  function holdDice(id) {
    isDiceNumber(preNum => {
      return preNum.map(die => { 
        return die.id === id ? 
        {...die, isHeld: !die.isHeld} : 
        die})
    })

    // diceNumber.map((die) =>
    //   die.id === id
    //     ? isDiceNumber((preVal) => [...preVal, die.isHeld = true])
    //     : isDiceNumber((preVal) => preVal)
    // );

    console.log(id);
  }

  const diceElements = diceNumber.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}
      handleSubmit={() => holdDice(die.id)}
    />
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
