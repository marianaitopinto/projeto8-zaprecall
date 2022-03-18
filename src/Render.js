export default function Render({ questionNo }) {
    return (
        <div className="deckBox">
            <p>{questionNo}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}