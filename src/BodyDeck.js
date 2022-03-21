import Render from "./Render";
import Footer from "./Footer"
import React from 'react';

const decks = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces." },
    { question: "Os componentes devem iniciar com __", answer: "Letra maiúscula." },
    { question: "Podemos colocar __ dentro do JSX.", answer: "Expressões." },
    { question: "O ReactDOM nos ajuda __ ", answer: "Interagindo com a DOM para colocar componentes React na mesma." },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências." },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes." },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente." }
];

decks.sort(Shuffle);

export default function BodyDeck() {
    const [done, setDone] = React.useState(0);
    const [icons, setIcons] = React.useState([]);
    const [wrong, setWrong] = React.useState(0);
    return (
        <div className="fundo">
            {decks.map((deck, index) => <Render key={index} questionNo={index + 1} question={deck.question} answer={deck.answer} done={done} setDone={setDone} icons={icons} setIcons={setIcons} wrong={wrong} setWrong={setWrong}/>)}
            <Footer done={done} icons={icons} wrong={wrong}/>
        </div>
    )
}

function Shuffle() {
    return Math.random() - 0.5;
}