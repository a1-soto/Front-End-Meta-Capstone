import Card from "./Card";

import heroImage from "../assets/images/hero-img.jpg";

import greekSalad from "../assets/images/greek-salad.png";
import bruschetta from "../assets/images/bruschetta.jpg";
import seaBass from "../assets/images/sea-bass.jpg";
import lemonTart from "../assets/images/lemon-tart.jpg";
import baklava from "../assets/images/baklava.jpg";



function Main() {
    const specials = [
        {
            id: 1,
            image: greekSalad,
            title: "Greek Salad",
            price: "$12.99",
            description:
                "Fresh vegetables, olives and feta cheese served with our signature dressing."
        },

        {
            id: 2,
            image: bruschetta,
            title: "Bruschetta",
            price: "$8.99",
            description:
                "Grilled bread with tomatoes, basil and extra virgin olive oil."
        },

        {
            id: 3,
            image: seaBass,
            title: "Grilled Sea Bass",
            price: "$18.99",
            description:
                "Fresh Mediterranean sea bass grilled with herbs and lemon."
        },

        {
            id: 4,
            image: lemonTart,
            title: "Lemon Meringue Tart",
            price: "$7.99",
            description:
                "Homemade lemon tart topped with toasted Italian meringue."
        },

        {
            id: 5,
            image: baklava,
            title: "Baklava",
            price: "$6.99",
            description:
                "Layers of filo pastry with pistachios and honey syrup."
        }
    ];

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
                <div className="container">

                    <div className="specials-header">

                        <h2>This week's specials!</h2>

                        <button>Online Menu</button>

                    </div>

                    <div className="specials-grid">

                        {specials.map((dish) => (

                            <Card
                                key={dish.id}
                                image={dish.image}
                                title={dish.title}
                                price={dish.price}
                                description={dish.description}
                            />

                        ))}

                    </div>
                </div>
            </section>

            <section className="testimonials">

            </section>

            <section className="about">

            </section>

        </main>
    );
}

export default Main;
