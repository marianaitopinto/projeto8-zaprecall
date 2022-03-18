import React from "react";

export default function Welcome() {
    const [visible, setVisible] = React.useState("");
    const css=`firstPage background ${visible}`
    return (
        <div className={css}>
            <img className="logo" src="img/logo.png" />
            <p className="title">ZapRecall</p>
            <button className="firstButton" onClick={() => setVisible("hiden")}>Iniciar Recall!</button>
        </div>
    )
}