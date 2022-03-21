import HeaderDeck from "./HeaderDeck";
import BodyDeck from "./BodyDeck"

export default function Deck() {
    return (
        <div className="layout">
            <HeaderDeck />
            <div className="bodyDeck">
                <BodyDeck />
            </div>
            
        </div>
    )
}