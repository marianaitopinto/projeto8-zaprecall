import React from "react";
export default function Render({ questionNo, question, answer }) {
    const [step, setStep] = React.useState("");

    if (step === "") {
        return (
            <div className="deckBox" onClick={() => setStep("question")}>
                <p>{questionNo}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        )
    }

    else if (step === "question") {
        return (
            <div className="deckBox biggerBox" onClick={() => setStep("answer")}>
                <p>{question}</p>
                <img className="setinha" src="img/setinha.png" />
            </div>
        )
    }

    else if (step === "answer") {
        return (
            <div className="deckBox answerBox biggerBox">
                <p className="answer">{answer}</p>
                <div>
                    <button className="answerButton redButton">Não lembrei</button>
                    <button className="answerButton yellowButton">Quase não lembrei</button>
                    <button className="answerButton greenButton">Zap!</button>
                </div>
            </div>
        )
    }

}