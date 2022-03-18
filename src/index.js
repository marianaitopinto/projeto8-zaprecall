import ReactDOM from "react-dom";
import Welcome from "./Welcome"

function App() {
    return (
        <Welcome />
    )
}

const elemento = document.querySelector(".root");
ReactDOM.render(<App />, elemento);