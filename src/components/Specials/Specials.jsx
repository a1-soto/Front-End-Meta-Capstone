import "./Specials.css";

import Card from "../Card/Card";

import greekSalad from "../../assets/images/greek-salad.png";
import bruschetta from "../../assets/images/bruschetta.jpg";
import seaBass from "../../assets/images/sea-bass.jpg";
import lemonTart from "../../assets/images/lemon-tart.jpg";
import baklava from "../../assets/images/baklava.jpg";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Carousel from "../Carousel/Carousel";

gsap.registerPlugin(ScrollTrigger);

export default function Specials() {

  const specialsRef = useRef(null);

  // Guarda todas las cards para que GSAP pueda animarlas
  const cardsRef = useRef([]);

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


  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: "power2.out",

          scrollTrigger: {
            trigger: specialsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, specialsRef);


    return () => ctx.revert();

  }, []);



  return (
    <section className="specials" ref={specialsRef}>

      <div className="container">

        <div className="specials-header">

          <h2>
            This week's specials!
          </h2>

          <button>
            Online Menu
          </button>

        </div>

        <Carousel>
          <div className="specials-grid">

            {specials.map((dish, index) => (

              <Card
                key={dish.id}


                ref={(el) => (cardsRef.current[index] = el)}

                image={dish.image}
                title={dish.title}
                price={dish.price}
                description={dish.description}
              />

            ))}

          </div>
        </Carousel>
      </div>

    </section>
  );
}