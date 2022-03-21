import React from "react";

export default function Welcome({setClicked}) {
    return (
        <div className="firstPage layout">
            <img className="logo" src="img/logo.png" alt="logo"/>
            <p className="title">ZapRecall</p>
            <button className="firstButton" onClick={() => setClicked(false)}>Iniciar Recall!</button>
        </div>
    )
}