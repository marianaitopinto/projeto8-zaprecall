import HeaderDeck from "./HeaderDeck";
import BodyDeck from "./BodyDeck"
import Footer from "./Footer"

export default function Deck() {
    return (
        <div className="layout">
            <HeaderDeck />
            <div className="bodyDeck">
                <BodyDeck />
            </div>
            <Footer />
        </div>
    )
}