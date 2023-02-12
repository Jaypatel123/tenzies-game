import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e351" : "white",
  };
  return (
    <div style={styles} className="dice-face" onClick={props.handleSubmit}>
      <h2>{props.value}</h2>
    </div>
  );
}
