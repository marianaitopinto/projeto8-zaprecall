import Render from "./Render";

export default function BodyDeck() {
    const decks = [
        { questionNo: "Pergunta 1", question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        { questionNo: "Pergunta 2", question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces." },
        { questionNo: "Pergunta 3", question: "Os componentes devem iniciar com __", answer: "Letra maiúscula." },
        { questionNo: "Pergunta 4", question: "Podemos colocar __ dentro do JSX.", answer: "Expressões." },
        { questionNo: "Pergunta 5", question: "O ReactDOM nos ajuda __ ", answer: "Interagindo com a DOM para colocar componentes React na mesma." },
        { questionNo: "Pergunta 6", question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências." },
        { questionNo: "Pergunta 7", question: "Usamos props para __", answer: "Passar diferentes informações para componentes." },
        { questionNo: "Pergunta 8", question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente." }
    ];

    return (
        <div className="fundo">
        {decks.map(deck => <Render questionNo={deck.questionNo} question={deck.question} answer={deck.answer}/>)}
        </div>
    )
}