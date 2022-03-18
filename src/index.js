import ReactDOM from "react-dom";
import Welcome from "./Welcome"
import Deck from "./Deck"

function App() {
    return (
        <>
        <Welcome />
        <Deck />
        </>
    )
}

const elemento = document.querySelector(".root");
ReactDOM.render(<App />, elemento);