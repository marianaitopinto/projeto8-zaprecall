import React from "react";
export default function Render({ questionNo, question, answer, done, setDone, icons, setIcons, wrong, setWrong }) {
    const [step, setStep] = React.useState("");

    if (step === "") {
        return (
            <div className="deckBox" onClick={() => setStep("question")}>
                <p>Pergunta {questionNo}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        )
    }

    else if (step === "question") {
        return (
            <div className="deckBox biggerBox">
                <p className="question">{question}</p>
                <img className="setinha" src="img/setinha.png" alt="setinha" onClick={() => setStep("answer")} />
            </div>
        )
    }

    else if (step === "answer") {

        return (
            <div className="deckBox answerBox biggerBox">
                <p className="answer">{answer}</p>
                <div className="buttons">
                    <button className="answerButton redButton" onClick={() => { setStep("red"); setDone(done + 1); setIcons([...icons, <img className="answerIcon" src="img/red.png" alt="red"/>]); setWrong(wrong + 1) }}>Não lembrei</button>
                    <button className="answerButton yellowButton" onClick={() => { setStep("yellow"); setDone(done + 1); setIcons([...icons, <img className="answerIcon" src="img/yellow.png" alt="yellow"/>]) }}>Quase não lembrei</button>
                    <button className="answerButton greenButton" onClick={() => { setStep("green"); setDone(done + 1); setIcons([...icons, <img className="answerIcon" src="img/green.png" alt="green"/>]) }}>Zap!</button>
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
            <p>Pergunta {questionNo}</p>
            <img className="answerIcon" src={`img/${step}.png`} alt={`${step}`} />
        </div>
    )
}