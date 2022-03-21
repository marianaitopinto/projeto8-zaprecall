import React from "react";
export default function Render({ questionNo, question, answer }) {
    const [step, setStep] = React.useState("");
    const colors = ["red", "yellow", "green"];

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
            <div className="deckBox biggerBox">
                <p>{question}</p>
                <img className="setinha" src="img/setinha.png" onClick={() => setStep("answer")} />
            </div>
        )
    }

    else if (step === "answer") {
        
        return (
            <div className="deckBox answerBox biggerBox">
                <p className="answer">{answer}</p>
                <div>
                    <button className="answerButton redButton" onClick={() => setStep("red")}>Não lembrei</button>
                    <button className="answerButton yellowButton" onClick={() => setStep("yellow")}>Quase não lembrei</button>
                    <button className="answerButton greenButton" onClick={() => setStep("green")}>Zap!</button>
                </div>
            </div>
        )
    }

    else if ((step === "red") || (step === "yellow") || (step === "green")) {
        return (
        <Finished step={step} questionNo={questionNo} />
        )
    }
}

function Finished({ step, questionNo }) {
    return (
        <div className={`deckBox ${step}`}>
            <p>{questionNo}</p>
            <img className="answerIcon" src={`img/${step}.png`} />
        </div>
    )
}