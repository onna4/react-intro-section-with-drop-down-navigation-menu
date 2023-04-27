import herodesk from "../assets/images/image-hero-desktop.png"
import heromob from "../assets/images/image-hero-mobile.png"
import databizIcon from "../assets/images/client-databiz.svg"
import audiophileIcon from "../assets/images/client-audiophile.svg"
import meetIcon from "../assets/images/client-meet.svg"
import makerIcon from "../assets/images/client-maker.svg"

function Main () {
    return (
        <main className="container" >
            <img src={heromob} alt="hero image" className="hero-mob" />
            <section className="grid-col">
                <h1 className="main-title" >Make remote work</h1>
                <p className="main-text">Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.</p>
                <button className="main-button" >Learn more</button>
                <figure>
                    <img src={databizIcon} alt="databiz icon" className="icon" />
                    <img src={audiophileIcon} alt="audiophile icon" className="audio icon" />
                    <img src={meetIcon} alt="meet Icon" className="icon" />
                    <img src={makerIcon} alt="maker Icon" className="icon" />
                </figure>
            </section>
            <img src={herodesk} alt="hero image" className="hero-desk" />
        </main>
    )
}

export default Main;