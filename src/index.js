import ReactDOM from "react-dom";
import Welcome from "./Welcome"
import Deck from "./Deck"
import React from "react"

function App() {
    const [clicked, setClicked] = React.useState(true);

    return (
        <>
            {clicked ? <Welcome setClicked={setClicked} /> : <Deck />}
        </>
    )
}

const elemento = document.querySelector(".root");
ReactDOM.render(<App />, elemento);