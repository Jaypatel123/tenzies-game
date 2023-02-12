import React from "react";


export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59e351" : "white"
      }
    return(
        <div style={styles} className="dice-face">
            <h2 onClick={props.handleSubmit}>{props.value}</h2>
        </div>
    )
}