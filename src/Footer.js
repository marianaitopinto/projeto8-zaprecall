export default function Footer({ done, icons, wrong }) {

    function restartGame() {
        document.location.reload(true);
    }

    return (
        (done === 8) ?
            (wrong !== 0) ?

                < div className="footer result" >
                    <div className="container2">
                        <img src="img/sad.png" alt="sad"/>
                        <p>  PUTZ!</p>
                    </div>
                    <p>Ainda faltaram alguns...</p>
                    <p>Mas não desanime!</p>
                    <div className="container">
                        <div className="icons">
                            {icons.map((icon) => icon )}
                        </div>
                        <button className="reload" onClick={restartGame}>REINICIAR RECALL</button>
                    </div>
                </div >

                :

                < div className="footer result" >
                    <div className="container2">
                        <img src="img/party.png" alt="party"/>
                        <p>  PARABÉNS!</p>
                    </div>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                    <div className="container">
                        <div className="icons">
                            {icons.map((icon) => icon)}
                        </div>
                        <button className="reload" onClick={restartGame}>REINICIAR RECALL</button>
                    </div>
                </div >

            :

            < div className="footer" >
                <p>{done}/8 CONCLUÍDOS</p>
                <div className="icons">
                    {icons.map((icon) => icon)}
                </div>
            </div >
    )
}