import React from "react";


export default function Die(props){
    return(
        <div className="dice-face">
            <h2 onClick={props.handleSubmit}>{props.value}</h2>
        </div>
    )
}