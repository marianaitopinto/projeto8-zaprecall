export default function Footer({ done, icons, wrong }) {
    return (
        (done === 8) ?
            (wrong !== 0) ?

                < div className="footer" >
                    <img src="img/sad.png" />
                    <p>PUTZ!</p>
                    <p>Ainda faltaram alguns...</p>
                    <p>Mas não desanime!</p>
                    {icons.map((icon) => icon)}
                </div >

                :

                < div className="footer" >
                    <img src="img/party.png" />
                    <p>PARABÉNS!</p>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                    {icons.map((icon) => icon)}
                </div >

            :

            < div className="footer" >
                <p>{done}/8 CONCLUÍDOS</p>
                {icons.map((icon) => icon)}
            </div >
    )
}