import heroImage from "../assets/images/hero-img.jpg";

function Main() {
    return (
        <main>

            <section className="hero">
                <div className="container">

                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>

                        <p>
                            We are a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern
                            twist.
                        </p>

                        <button>Reserve a Table</button>
                    </div>

                    <div className="hero-image">
                        <img
                            src={heroImage}
                            alt="Chef holding a tray of bruschetta"
                        />
                        <div className="hero-card">
                            <h3>SIGNATURE EXPERIENCE</h3>

                            <p>
                                "Every dish tells a story of the sun,
                                the sea, and the Chicago soil."
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="specials">

            </section>

            <section className="testimonials">

            </section>

            <section className="about">

            </section>

        </main>
    );
}

export default Main;
